export const ButtonComponent = ({ children, content='', custom='' }) => {
    return (
        <button className={`px-40 py-5 bg-[#2E5AFC] rounded-full text-3xl ${ custom }`}>
            { children ? children : content }
        </button>
    )
}
