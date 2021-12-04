import './Project.css';


function Project(props) {

    /*
        const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        fetchData("https://yh-finance.p.rapidapi.com/auto-complete?q=hbar&region=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "yh-finance.p.rapidapi.com",
                "x-rapidapi-key": "667970b251msh4a89a4913763c50p1ee841jsn4d74f6d723fc"
            }
        })
         .then((res) => {
           // try to change the order of the setData and setLoading here
           // and see if the UI breaks
           console.log()
           setData(res.data);
           setLoading(false);
         })
         .catch((err) => {
           setLoading(false);
           setError(true);
           setData();
         });
    }, []);

    this.state = {
        price: ''
    };
    
    this.hover = this.hover.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleChange(changeObject) {
        this.setState(changeObject);
    }
     */


    return (
        <div className="project-container">
            <div className="row">
                <div className="title-group">
                    <h3>{props.title}</h3>
                    <h6 style={{color: props.seriesColor}}>{props.series}</h6>
                </div>
                <div className="price-group">
                    <h5>{props.price} {props.currency}</h5>
                    <h6>{props.quantity} in stock</h6>
                </div>
            </div>
            <div className="row">
                <video autoplay="true" muted="true" loop="true" src={props.src} className="preview-image" alt={props.title} />
            </div>
        </div>
    );
}

export default Project;