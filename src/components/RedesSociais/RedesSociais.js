import './RedesSociais.css';

const RedesSociais = () => {

    const ListaRedes = [
        { id: 1, urlName: 'Instagram', url: 'https://www.instagram.com/lucas.blaser/'},
        { id: 2, urlName: 'Linkedin', url: 'https://www.linkedin.com/in/lucas-breia/'},
        { id: 3, urlName: 'GitHub', url: 'https://github.com/lucasbreiafullstack'},
        { id: 4, urlName: 'Portfolio', url: 'https://my-portfolio-puce-eight-62.vercel.app/'},
        { id: 5, urlName: 'WhatsApp', url: 'https://wa.me/5521992863904'}
    ]

    const LinksRedes = ListaRedes.map((props) =>
        <div key={props.id} className='conteudo_links'>
            <a href={props.url}>{props.urlName}</a>
        </div>
    )

    return(
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais;