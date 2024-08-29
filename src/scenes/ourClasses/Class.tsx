
type Props = {
    name: string;
    description?: string;
    image: string;
}

function Class({name, description = "some description", image}: Props) {
    const overlayStyles = `p-5 absolute z-30 flex h-[350px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 rounded-lg`
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt={`${image}`} className='rounded-lg' />
    </li>
  )
}

export default Class;