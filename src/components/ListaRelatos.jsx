// Lista de relatos com os botões de editar e apagar
function ListaRelatos({ relatos, onEditar, onApagar }) {
  if (relatos.length === 0) {
    return <p className="text-gray-600">Nenhum relato registrado ainda.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {relatos.map((relato) => (
        <li key={relato.id} className="rounded-xl bg-white p-4 shadow">
          <p className="font-semibold">{relato.rua}</p>
          <p className="text-gray-600">{relato.descricao}</p>
          <p className="mt-1 text-xs text-gray-400">Relatado por morador (não confirmado pelo sensor)</p>
          <div className="mt-3 flex gap-4 text-sm">
            <button onClick={() => onEditar(relato)} className="text-secundaria">Editar</button>
            <button onClick={() => onApagar(relato.id)} className="text-critico">Apagar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaRelatos;
