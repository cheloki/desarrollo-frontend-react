import { useSelector, useDispatch } from 'react-redux'
const About = () => {
    const count = useSelector((state) => state.product.initialValue)
    return (
        <>

            <p>Component About {count}</p>
           
        </>
    );
}
export default About;