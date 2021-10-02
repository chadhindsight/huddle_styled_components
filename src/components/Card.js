import { StyledCard } from './styles/Card.styled'

export default function Card({ item: { id, title, body, image } }) {
    return (
        // Use a ternary to determine what card should have row-reverse
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt='' />
            </div>
        </StyledCard>
    )
}