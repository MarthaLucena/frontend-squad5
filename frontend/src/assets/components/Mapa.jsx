import '../components/Mapa.css'


const Mapa = () => {
    return (
        <section className="container">
            <div className="map">
                <h2 className="map-ong-text">Dê uma volta pela cidade e conheça algumas ONGs</h2>
                <iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58815.82748082706!2d-43.391976173051795!3d-22.876856706362545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1songs!5e0!3m2!1sen!2sbr!4v1682092187122!5m2!1sen!2sbr" width="1200" height="400"></iframe>
            </div>
        </section>
    );
};


  
  export default Mapa;
  