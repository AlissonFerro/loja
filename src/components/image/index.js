import { Col } from 'react-bootstrap';
import './styles.css';

export default function Image(){
    return (
        <Col xs={12}   className='content-col'>
            <div className='content-image'>
                <img 
                    className="image" 
                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} 
                />
                <h1 className='title-image'>Café</h1>
                <p className='value-image'>descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eu ante quis bibendum. Morbi cursus vestibulum enim a ultrices. Vivamus vitae aliquam risus, facilisis. </p>
                <p className='value-image'>preço: R$ 4,00</p>
            </div>
        </Col>
    )
}