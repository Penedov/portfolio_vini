/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"], // Define o suporte ao modo escuro baseado em classes. Útil para maior controle.
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Escaneia arquivos dentro da pasta pages para classes CSS.
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // Inclui componentes personalizados.
        "./app/**/*.{js,ts,jsx,tsx,mdx}" // Inclui arquivos no padrão App Router.
    ],
    prefix: "",
    theme: {
        container: {
            center: true, // Centraliza automaticamente o container.
            padding: "15px", // Adiciona padding padrão ao container.
        },
        screens: {
            sm: "640px", // Define pontos de interrupção para dispositivos pequenos.
            md: "768px", // Médio.
            lg: "960px", // Grande.
            xl: "1200px", // Extra grande.
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)", // Conecta com o arquivo `globals.css` para aplicar a fonte global.
        },
        extend: {
            colors: {
                primary: "#1c1c22", // Cor de fundo principal escura, ideal para designs modernos.
                accent: {
                    DEFAULT: "#00ff99", // Cor de destaque padrão.
                    hover: "#00e187",
                }
            },
            borderRadius: {
                lg: 'var(--radius)', // Variáveis para controle preciso dos raios de borda.
                md: 'calc(var(--radius) - 2px)', // Ajustes progressivos menores.
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")], // Adiciona animações com o plugin.
};
