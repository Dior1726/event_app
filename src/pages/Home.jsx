import { useEffect, useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { Box, Button } from '@chakra-ui/react'
import { db, auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Home = () => {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')

  const createEvent = async () => {
    const payload = {
      client_name: 'Ada',
      address: 'Ibragim Ata',
      client_phone: 123,
      company: 'IP Ada',
      date: '2023-04-20',
    }

    try {
      const docRef = await addDoc(collection(db, 'events'), payload)
      console.log('Document written with ID: ', docRef.id)
      setEvents((prev) => [...prev, payload])
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const fetchEvents = async () => {
    setIsLoading(true)
    await getDocs(collection(db, 'events')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setIsLoading(false)
      setEvents(newData)
    })
  }

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email', value)
    })
  }

  useEffect(() => {
    fetchEvents()
    setValue(localStorage.getItem('email'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box>
      <Box>
        <Button
          colorScheme='teal'
          onClick={createEvent}
        >
          Button
        </Button>
      </Box>

      <Box>
        <Button
          colorScheme='teal'
          onClick={handleLogin}
        >
          Button
        </Button>
      </Box>

      {isLoading
        ? 'Loading...'
        : value && (
            <Box>
              {events.map((event, n) => (
                <Box key={n}>
                  {event.client_name} - {event.company} - {event.date}
                </Box>
              ))}
            </Box>
          )}
    </Box>
  )
}

export default Home
