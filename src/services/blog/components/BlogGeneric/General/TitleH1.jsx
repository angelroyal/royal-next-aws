export default function TitleH1({ children }) {
    return (
        <>
            {/* En este componente se mapearán los títulos almacenados en la BD */}
            <div>
                <h1 className="m-b font-bold text-center text-fs-32">{children}</h1>
            </div>
        </>
    )
}