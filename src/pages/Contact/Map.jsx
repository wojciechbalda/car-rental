import classes from './Map.module.css'

function Map()
{
    return (
        <div className={classes.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39237.5743189617!2d20.97604618053539!3d52.07338742529044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192e390fc40201%3A0x88c75a9c7e7a1bf5!2s05-500%20Piaseczno!5e0!3m2!1sen!2spl!4v1699194493067!5m2!1sen!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map