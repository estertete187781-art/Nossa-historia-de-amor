import { motion } from "framer-motion";

export default function LoveStorySite() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-center font-serif text-brown-800 relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 20}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Background music */}
      <audio autoPlay loop>
        <source
          src="https://open.spotify.com/track/1wzMqAzYdN8y4Fz2qgJYyD"
          type="audio/mpeg"
        />
      </audio>

      {/* Cover Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="py-16 relative z-10"
      >
        <img
          src="/mnt/data/A_watercolor-style_illustration_features_a_young_c.png"
          alt="Ester e Guilherme se abraçando"
          className="mx-auto rounded-2xl shadow-lg w-80 border border-amber-200"
        />
        <h1 className="text-4xl font-bold mt-6">A Nossa História de Amor</h1>
        <p className="text-lg mt-2">Ester & Guilherme</p>
      </motion.section>

      {/* Chapters with transitions */}
      {[
        {
          title: "🌸 Capítulo 1 — Como Tudo Começou",
          text: [
            "Era um dia comum, mas Deus já tinha preparado algo extraordinário. Entre risadas, olhares e conversas simples, nascia algo que nenhum dos dois imaginava: o início de uma história escrita pelo próprio Autor do amor.",
            "Ester e Guilherme. Dois corações diferentes, mas que pareciam se reconhecer desde o primeiro instante. Foi em gestos pequenos, em palavras sinceras e nos silêncios cheios de paz que o amor começou a florescer. Um amor que não veio apressado, mas com a calma de quem sabe que o tempo de Deus é perfeito.",
          ],
          verse:
            "“O amor é paciente, o amor é bondoso... Tudo sofre, tudo crê, tudo espera, tudo suporta.” — 1 Coríntios 13:4,7",
        },
        {
          title: "🌷 Capítulo 2 — Nosso Primeiro Momento Especial",
          text: [
            "No dia 22 de dezembro, uma amiga em comum virou o elo que Deus usou. Ester comentou sobre ele, e Guilherme achou que fosse brincadeira. Mas Deus sabia que não era. Era o início de algo verdadeiro.",
            "Então veio o dia 8 de janeiro — a primeira mensagem no WhatsApp. Dali em diante, não houve mais silêncio. As conversas se tornaram parte da rotina, e cada palavra trocada aproximava ainda mais seus corações. No dia 20 de janeiro, Guilherme disse algo que ficaria marcado pra sempre: “Eu vou casar com você.”",
          ],
          verse:
            "“Tudo o que é feito com amor permanece, porque Deus é amor.” — 1 João 4:16",
        },
        {
          title: "💖 Capítulo 3 — Nosso Amor Hoje",
          text: [
            "Nove meses se passaram desde aquele primeiro “oi”. O que começou como simples mensagens se transformou em um amor profundo, cheio de propósito. Ester é intensa, sonhadora e, sim, um pouquinho dramática — mas é esse drama que dá cor à relação. Guilherme, com seu jeito calmo, entende cada gesto, cada silêncio e transforma birra em riso.",
            "Entre planos e promessas, os dois sonham com sua família, com seus filhos Abafe e Alise, em um lar cheio de fé e união. Porque o amor deles não é passageiro; é promessa cumprida.",
          ],
          verse:
            "“E agora permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.” — 1 Coríntios 13:13",
        },
        {
          title: "💍 Capítulo 4 — Nosso Futuro",
          text: [
            "Eles se chamam de pinguins, porque os pinguins escolhem um só parceiro pra vida toda. E assim são Ester e Guilherme: dois corações que se encontraram e decidiram caminhar juntos para sempre.",
            "Sonham com o casamento, com a casa deles, com risadas e o nome de Deus sendo exaltado em cada detalhe. Um amor fiel, paciente e cheio de graça, firmado na rocha que é Cristo.",
          ],
          verse: "“O que Deus uniu, ninguém separa.” — Mateus 19:6",
        },
      ].map((chapter, index) => (
        <motion.section
          key={index}
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-left mb-12 relative z-10"
        >
          <h2 className="text-2xl font-bold mb-4">{chapter.title}</h2>
          {chapter.text.map((paragraph, i) => (
            <p key={i} className="mt-4">
              {paragraph}
            </p>
          ))}
          <blockquote className="italic text-center mt-4">
            {chapter.verse}
          </blockquote>
        </motion.section>
      ))}

      {/* Epilogue */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-left mb-20 relative z-10"
      >
        <h2 className="text-2xl font-bold mb-4">
          ✨ Epílogo — De Ester para Guilherme
        </h2>
        <p>
          Hoje fazem 9 meses desde o dia em que você me tornou a namorada mais
          feliz do mundo. Sou muito grata a Deus, pois Ele me deu você, meu
          pinguim, meu engraçadinho. Desde então sou a mulher mais sortuda e
          mais amada do mundo. Obrigada por me amar, cuidar de mim e me mostrar
          o que é o amor. Eu te amoooo!
        </p>
        <blockquote className="italic text-center mt-4">
          “Eu achei aquele a quem ama a minha alma.” — Cantares 3:4
        </blockquote>
      </motion.section>

      {/* Animated ending message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="text-2xl font-bold text-pink-500 pb-10"
      >
        💞 Fim... mas só do primeiro capítulo da nossa eternidade 💍✨
      </motion.div>
    </main>
  );
      }
