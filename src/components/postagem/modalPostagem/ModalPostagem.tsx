
// @ts-ignore
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function FormPostagem() {
    return (
        <form className="flex flex-col gap-4 p-4">
            <input type="text" placeholder="Título" className="border rounded px-2 py-1" />
            <textarea placeholder="Conteúdo" className="border rounded px-2 py-1" />
            <div className="flex justify-end">
                <button type="submit" className="bg-indigo-800 text-white px-4 py-2 rounded">
                    Publicar
                </button>
            </div>
        </form>
    );
}

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;