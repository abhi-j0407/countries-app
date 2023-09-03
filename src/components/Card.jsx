import PropTypes from 'prop-types';

const Card = ({ deets }) => {
  console.log(deets)
  return (
    <div className="card">
      <div className="flag">
        <img src={deets?.flags?.svg} alt="flag" />
      </div>
      <div className="details">
        <h3>{deets?.name?.common}</h3>
        <div className="stats">
          <div>
            <p className='title'>Population:</p>
            <p className="stat">{ deets?.population }</p>
          </div>
          <div>
            <p className='title'>Region:</p>
            <p className="stat">{ deets?.region }</p>
          </div>
          <div>
            <p className='title'>Capital:</p>
            <p className="stat">{ deets?.capital }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  deets: PropTypes.object
}

export default Card