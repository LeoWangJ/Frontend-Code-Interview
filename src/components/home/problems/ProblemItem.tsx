
interface ProblemItemProps {
    title: string;
    order: number;
    children: React.ReactNode;
}

const ProblemItem = ({ title, order, children }: ProblemItemProps) => {
    return (
        <div className="border-t mt-6 pt-6">
            <h2 className="font-bold text-xl">Problem {order}: {title}</h2>
            {children}
        </div>
    )
}

export default ProblemItem;