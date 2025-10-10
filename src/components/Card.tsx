import { CardData } from '@/app/page';
import { motion } from 'framer-motion';

export default function Card({ data, onClick }: { data: CardData; onClick: () => void }) {
  return (
    // <motion.button
    //   className="focus:outline-none"
    //   layoutId={`card-${data.id}`}
    //   onClick={onClick}
    //   style={{ background: data.color }}
    //   aria-label={`Open ${data.title}`}
    // >
      <div className="">
        <h3 className="text-2xl font-semibold text-black">{data.title}</h3>
      </div>
    // {/* </motion.button> */}
  );
}