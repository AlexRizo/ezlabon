export const ButtonComponent = ({ children, content='', custom='' }) => {
    return (
        <button className={`xl:px-40 py-3 bg-[#2E5AFC] rounded-full xl:text-3xl ${ custom }`}>
            { children ? children : content }
        </button>
    )
}
