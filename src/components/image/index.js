import { Col } from 'react-bootstrap';
import styles from './styles.module.scss';

export default function Image(){
    return (
        <Col xs={12}   className='content-col'>
            <div className={styles.content_image}>
                <img 
                    className={styles.image} 
                    src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} 
                />
                <h1 className={styles.title}>Café</h1>
                <p className={styles.value}>descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla eu ante quis bibendum. Morbi cursus vestibulum enim a ultrices. Vivamus vitae aliquam risus, facilisis. </p>
                <p className={styles.value}>preço: R$ 4,00</p>
            </div>
        </Col>
    )
}