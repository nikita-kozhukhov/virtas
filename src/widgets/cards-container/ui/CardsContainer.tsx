import { Card } from 'shared/ui/card';
import { CardInfoProps } from 'shared/ui/card/types/card-info';

import styles from './CardsContainer.module.scss';

export const CardsContainer = ({ cards }: { cards: CardInfoProps[] }) => {
  return (
    <div className={styles['cards-container']}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            items={card.items}
            footer={card.footer}
          />
        );
      })}
    </div>
  );
};
