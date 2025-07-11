import "./GenreBadge.css"


interface GenreBadgeProps {
    name: string;
    isActive?: boolean,
}

const GenreBadge = ({isActive = false, name}: GenreBadgeProps) => {

    return (
        <>
            <span className={`genre-badge ${isActive ? 'active' : ''}`}>{name}</span>
        </>

    );
};
export default GenreBadge;