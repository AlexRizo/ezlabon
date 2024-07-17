export const ButtonComponent = ({ children, content='', custom='' }) => {
    return (
        <button className={`xl:px-36 py-3 bg-[#2E5AFC] rounded-full xl:text-[26px] ${ custom }`}>
            { children ? children : content }
        </button>
    )
}
