import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Footer(){
    return(
        <Col className={styles.content}>
            <p>
                Footer
            </p>
            <p>
                Desenvolvedor
            </p>
            <Row>
                <Col className={styles.copyright}>
                    <span className="material-symbols-outlined">
                        copyright
                    </span>
                </Col>
            </Row>
        </Col>
    )
}