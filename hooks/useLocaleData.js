import { useRouter } from 'next/router';

const useLocaleData = (locales) => {
  const { locale } = useRouter();
  const filteredData = Object.values(locales);
  const filteredDescription = filteredData.filter((e) => {
    if (locale === 'en') {
      return e.locale === 'en';
    } else {
      return e.locale === 'pt_BR';
    }
  });

  return filteredDescription[0].value;
};

export default useLocaleData;
