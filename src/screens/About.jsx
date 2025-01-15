import { useSelector, useDispatch } from 'react-redux'
const About = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <>

            <p>Component About {count}</p>
           
        </>
    );
}
export default About;