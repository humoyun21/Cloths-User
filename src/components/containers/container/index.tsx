import "./style.scss"

const index = ({children}:any) => {
    return (
        <div className="max-w-[1200px] w-full mx-auto">
            {children}
        </div>
    );
};

export default index;