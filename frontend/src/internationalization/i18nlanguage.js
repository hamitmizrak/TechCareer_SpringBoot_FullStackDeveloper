import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homePage':"Home Page",
                    'date':"System Created Date",
                    'create':"Create",
                    'delete':"Delete",
                    'update':"Update",
                    'view':"View",
                    'blog':"Blog",
                    'blog_id':"Blog ID",
                    'blog_header':'Blog Header',
                    'blog_content':'Blog Content',
                    'submit':"Submit",
                    'clear':"Clear",
                    'user_blog_is_read':"Are You blog Read ?"
                }
            },
        tr:
            {
                translations: {
                    'homePage':"Anasayfa",
                    'date':"Ekleme Tarihi",
                    'create':"Ekle",
                    'delete':"Sil",
                    'update':"Güncelle",
                    'view':"Göster",
                    'blog':"Blog",
                    'blog_id':"Blog ID",
                    'blog_header':'Blog Başlığı',
                    'blog_content':'Blog İçeriği',
                    'submit':"Gönder",
                    'clear':"Temizle",
                    'user_blog_is_read':"Okudunuz mu"
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;