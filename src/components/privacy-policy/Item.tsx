import { useTranslation } from 'react-i18next';

interface Props {
  item: string;
}
export const Item = ({ item }: Props) => {
  const { t } = useTranslation();

  return (
    <li className="text-base text-gray-700 md:text-lg">
      {t(`policy.${item}`)}{' '}
      {item === 'i9' && <span className="font-bold">{t('policy.email')}</span>}
    </li>
  );
};
