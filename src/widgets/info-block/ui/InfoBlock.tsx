'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

import { Button } from 'shared/ui/button';
import { Logo } from 'shared/ui/logo';

import styles from './InfoBlock.module.scss';

export const InfoBlock = () => {
  return (
    <div className={styles['info-block']}>
      <div className={styles['text-block']}>
        <div className={styles['text-block--logo']}>
          <Logo color="dark" />
        </div>

        <div className={styles['text-block--text']}>
          <span>
            Твой помощник
            <br />в достижении целей
          </span>
        </div>

        <Button title="Подробнее" color="red" size="big" />
      </div>

      <div className={styles['image-block']}>
        <div className={styles['image-block--image']}>
          <Image
            src="/images/woman.webp"
            alt="Виртуальный помощник"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <div className={styles['image-block--buble']}>
          <div className={styles['image-block--text']}>
            <TypeAnimation
              sequence={[
                'Привет, Я Virtas!', // текст
                1500, // пауза
                'Я твой виртуальный помощник!',
                1500,
                'Я буду помогать тебе достигать твоих целей!',
                1500,
                '', // стираем
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </div>
          <Image
            src="/images/buble.webp"
            alt="buble"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};
