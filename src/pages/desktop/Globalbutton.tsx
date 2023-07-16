interface GlobalButtonProps {
    height: string;
    width: string;
    backgroundColor: string;
    color: string;
    text: string
}

const Globalbutton: React.FC<GlobalButtonProps> = ({height, width, backgroundColor, color, text}) => {
  return (
      <button className={`bg-${backgroundColor} h-${height} w-${width} text-${color}`}>
          {text}
    </button>
  )
}

export default Globalbutton