import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Bring in the asynchronous fetchAdverts action
import { fetchAdverts } from '../actions/advertsActions'
import { Advert } from '../components/Advert'

// Redux state is now in the props of the component
const AdvertsPage = ({ dispatch, loading, adverts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchAdverts())
  }, [dispatch])

  //Show loading, error or success state
  const renderAdverts = () => {
    if (loading) return <p>Loading adverts</p>
    if (hasErrors) return <p>Unable to display adverts</p>
    return adverts.map((advert) => <Advert key={advert.id} advert={advert}/>)
  }

  return (
    <section>
      <h1>Posts</h1>
      {renderAdverts()}
    </section>
  )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.adverts.loading,
  adverts: state.adverts.adverts,
  hasErrors: state.adverts.hasErrors,
})

export default connect(mapStateToProps)(AdvertsPage)
