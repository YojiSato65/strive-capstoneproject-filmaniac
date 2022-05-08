import '../styles/person.css'
import { useState } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap'
import PersonRow from './PersonRow'

const SearchPerson = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchPersonRowTitle, setSearchPersonRowTitle] = useState('')
  const [searchPersonRow, setSearchPersonRow] = useState([])

  const handleSearchQuery = async (e) => {
    e.preventDefault()

    const response = await fetch(
      'https://imdb-api.com/en/API/SearchName/k_xtso692i/' + searchQuery,
    )
    if (response.ok) {
      const data = await response.json()
      setSearchPersonRowTitle(data)
      setSearchPersonRow(data.results)
      console.log('searchPersonRow', searchPersonRow)
    }
  }

  return (
    <>
      <Jumbotron className="text-center d-flex flex-column justify-content-center mb-0 person-jumbotron">
        <h1 className="mb-3">Who are you searching for?</h1>

        <h3>The movie lover's database and streaming website in one.</h3>

        <Form
          className="d-flex justify-content-center mt-3"
          onSubmit={handleSearchQuery}
        >
          <Form.Group className="mb-0">
            <Form.Control
              type="text"
              placeholder="Director, actor, and actress"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Search
          </Button>
        </Form>
      </Jumbotron>

      <PersonRow
        title={searchPersonRowTitle.expression}
        people={searchPersonRow}
        searchPersonRowTitle={searchPersonRowTitle}
      />
    </>
  )
}

export default SearchPerson
