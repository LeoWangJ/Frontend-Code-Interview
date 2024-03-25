const Highlight = ({ text = '' }) => {
    return (
        <span className="border rounded font-bold bg-amber-50 border-amber-400 mx-1 py-0.5 px-1.5 inline">
            {text}
        </span>
    );
}
export default Highlight;