<template>
  <!-- nav -->
  <div class="nav">
    <img src="@/assets/header_logo.png" />
    <ul class="nav-ul">
      <a class="ref" href="#tarifPlans"><li class="nav-li">Тарифы</li></a>
      <a class="ref" href="#questions"><li class="nav-li">FAQ</li></a>
      <a class="ref" href=" https://wiki.srvup.ru/support" target="_blank"
        ><li class="nav-li">Поддержка</li></a
      >
      <a class="ref" href="https://wiki.srvup.ru/" target="_blank"
        ><li class="nav-li">База знаний</li></a
      >
      <a class="ref" href="reviews.srvup.ru" target="_blank"
        ><li class="nav-li">Отзывы</li></a
      >
    </ul>
    <button class="nav-btn">
      <a href="https://bill.srvup.ru/" target="_blank" style="color: white"
        >Биллинг</a
      >
    </button>
  </div>
  <!-- tarifs? -->
  <container class="tarifs">
    <div class="tarifs-info">
      <p class="tarifs-info-host">
        Мощный хостинг с Anti-DDoS Game защитой для проектов любых сложностей
      </p>
      <p class="tarifs-info-speed">
        Чтобы вы могли убедиться в качестве нашего хостинга, мы предлагаем<br />
        тестовый период. Вы сможете оценить нашу производительность и<br />
        функциональность перед принятием окончательного решения.
      </p>
      <div class="tarifs-btns">
        <button id="btn_1" class="tarifs-info-btn" style="color: white">
          <a
            href=" https://bill.srvup.ru/billing.php?do=order2&tarif_id=58"
            target="_blank"
            >Протестировать сервер</a
          >
        </button>
        <button
          id="btn_2"
          class="tarifs-info-btn"
          style="
            color: rgba(29, 86, 236, 1);
            background: white;
            border: 2px solid rgba(29, 86, 236, 1);
          "
        >
          <a href="#tarifPlans"> Посмотреть тарифы </a>
        </button>
      </div>
    </div>
    <img class="tarifs-img" src="@/assets/image2.png" />
  </container>
  <!-- about -->
  <container class="about">
    <div><p>Почему выбирают <span style="border-bottom: 4px solid rgba(29, 86, 236, 1);">нас?</span></p></div>
    <div><img src="@/assets/Lists.png" /></div>
  </container>
  <!-- services -->
  <container class="services">
    <div class="services-info">
      <div><p>Поддерживаемые <span style="border-bottom: 4px solid rgba(29, 86, 236, 1);">игры</span> и программы</p></div>
      <div class="services-games"><img src="@/assets/games.png" /></div>
    </div>
  </container>
  <!-- plans -->
  <div class="tarifPlans">
    <p class="tarifPlans-tag" id="tarifPlans">Тарифные <span style="border-bottom: 4px solid rgba(29, 86, 236, 1);">планы</span> </p>
    <div class="tarifPlans-buttons">
      <input checked type="radio" id="one" value="1" v-model="picked" />
      <label for="one">Игровые сервера</label>
      <input type="radio" id="two" value="2" v-model="picked" />
      <label for="two">VDS</label>
      <input type="radio" id="three" value="3" v-model="picked" />
      <label for="three"
        ><a href="https://dedic.srvup.ru/" target="_blank"
          >Выделенный сервер</a
        ></label
      >
    </div>
    <div class="tarifPlans-table">
      <tableTarifs :table="table1" :inTarifs="inTarifs" v-if="picked == 1" />
      <tableTarifs
        :table="table1"
        :inTarifs="inTarifs2"
        :deleteConnect="false"
        v-if="picked == 2"
      />
    </div>
    <div class="stepform_8vGLfm7 rnd_1271651571" v-show="picked == 1"></div>
    <div class="stepform_AzCaoLN rnd_1283789748" v-show="picked == 2"></div>
    <div class="uniqueOffers">
      <p class="uniqueOffers-text">Уникальные предложения</p>
      <div class="uniqueOffers-div">
        <p class="uniqueOffers-div-text">Скидка 5% при оплате за три месяца</p>
        <p class="uniqueOffers-div-text">15% за приглашенного друга</p>
        <p class="uniqueOffers-div-text">Если найдете дешевле,сделаем скидку</p>
      </div>
    </div>
  </div>
  <container class="questions" id="questions">
    <div class="questions-info">
      <p class="questions-info-top">Часто задаваемые вопросы</p>
      <p class="questions-info-bottom">
        Не нашли ответа на вопрос?<br />
        Загляните в нашу базу знаний или<br />
        напишите нам, мы будем рады помочь!
      </p>
    </div>
    <div class="text-subtitle-2 mt-4 mb-2"></div>
    <Accordion>
      <AccordionTab header="Как долго активируется мой сервер?">
        <p>
          Активация игрового сервера обычно занимает всего несколько минут после
          оформления заказа за исключением тестового периода и форсмажорных
          ситуаций. В случае с VDS как только вы заплатите за услугу и установка
          сервера будет завершена, вы сможете приступить к управлению своим
          сервером.
        </p>
      </AccordionTab>
      <AccordionTab header="Сколько человек выдержит мой игровой сервер?">
        <div>
          <p>
            Вместимость вашего игрового сервера зависит от выбранного вами
            тарифного плана. Мы предоставляем различные варианты, которые
            поддерживают разное количество одновременных игроков. Наши тарифы
            позволяют выдерживать от нескольких десятков до нескольких сотен
            игроков одновременно. Подробную информацию вы можете получить в базе
            знаний или уточнить у нашей службы поддержки.
          </p>
        </div>
      </AccordionTab>
      <AccordionTab
        header="Могу ли я создать сервер по другой игре, кроме Minecraft?"
      >
        <p>
          Конечно! Помимо, Minecraft, вы можете создать сервер для большинства
          игр и сервисов. Мы поддерживаем широкий спектр и постоянно расширяем
          список доступных опций. Если у вас есть конкретная игра или сервис,
          для которого вы хотите создать сервер, свяжитесь с нашей службой
          поддержки, и мы постараемся предоставить вам соответствующие
          возможности.
        </p>
      </AccordionTab>
    </Accordion>
  </container>
  <container class="footer">
    <div class="footer-left">
      <img src="@/assets/header_logo.png" />
      <p>
        Клиентоорентированный<br />
        хостинг, которому нет<br />
        равных!
      </p>
      <p class="footer-left-p">2023 All right reserved. SrvUP</p>
    </div>
    <div class="footer-middle">
      <ul class="footer-middle-list">
        <p>Ссылки</p>
        <li>
          <a href=" https://wiki.srvup.ru/" target="_blank">База знаний</a>
        </li>
        <li>
          <a href="reviews.srvup.ru" target="_blank">Отзывы</a>
        </li>
        <li><a>Биллинг</a></li>
      </ul>
      <ul class="footer-middle-list">
        <p>Документы</p>
        <li>
          <a href="https://wiki.srvup.ru/terms-of-use" target="_blank"
            >Пользовательское соглашение</a
          >
        </li>
        <li hidden>Политика конфиденциальности</li>
      </ul>
    </div>
    <div class="footer-right">
      <div>
        <p>
          Мы в социальных<br />
          сетях
        </p>
        <a href="https://t.me/srvup" target="_blank"
          ><img src="@/assets/tg_icon.png"
        /></a>
        <a href="https://vk.com/srvup_ru" target="_blank"
          ><img src="@/assets/vk_icon.png"
        /></a>
        <a href="https://discord.srvup.ru/" target="_blank"
          ><img src="@/assets/discord_icon.png"
        /></a>
      </div>
      <div>
        <p>Принимаем к оплате</p>
        <img src="@/assets/oplata_mir.png" />
        <img src="@/assets/oplata_sbp.png" />
        <img src="@/assets/oplata_icon.png" />
        <img src="@/assets/oplata_qiwi.png" />
      </div>
    </div>
  </container>
</template>

<script>
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import tableTarifs from "@/components/TableTarifs.vue";
export default {
  components: { tableTarifs, Accordion, AccordionTab },
  data() {
    return {
      toggle: true,
      picked: 1,
      plans: [
        {
          name: "Игровые сервера",
        },
        {
          name: "VDS",
        },
        {
          name: "Выделенный сервер",
        },
      ],
      inTarifs: [
        {
          id: 1,
          tarifName: "GS-1(Bungeecord)",
          cpu: "0.5 vCore",
          ram: "1 GB DDR4",
          container: "10 GB NVMe",
          priceEuro: 1.3,
          priceRub: 0,
        },
        {
          id: 2,
          tarifName: "GS-2",
          cpu: "1 vCore",
          ram: "2 GB DDR4",
          container: "20 GB NVMe",
          priceEuro: 2.6,
          priceRub: 10,
        },
        {
          id: 3,
          tarifName: "GS-3",
          cpu: "1.5 vCore",
          ram: "3 GB DDR4",
          container: "30 GB NVMe",
          priceEuro: 3.9,
          priceRub: 10,
        },
        {
          id: 4,
          tarifName: "GS-4",
          cpu: "2 vCore",
          ram: "4 GB DDR4",
          container: "40 GB NVMe",
          priceEuro: 5.2,
          priceRub: 10,
        },
        {
          id: 5,
          tarifName: "GS-5",
          cpu: "2.5 vCore",
          ram: "5 GB DDR4",
          container: "50 GB NVMe",
          priceEuro: 6.5,
          priceRub: 10,
        },
        {
          id: 6,
          tarifName: "GS-6",
          cpu: "3 vCore",
          ram: "6 GB DDR4",
          container: "60 GB NVMe",
          priceEuro: 7.8,
          priceRub: 10,
        },
        {
          id: 7,
          tarifName: "GS-8",
          cpu: "4 vCore",
          ram: "8 GB DDR4",
          container: "80 GB NVMe",
          priceEuro: 10.4,
          priceRub: 10,
        },
        {
          id: 8,
          tarifName: "GS-10",
          cpu: "5 vCore",
          ram: "10 GB DDR4",
          container: "100 GB NVMe",
          priceEuro: 13,
          priceRub: 10,
        },
        {
          id: 9,
          tarifName: "GS-12",
          cpu: "6 vCore",
          ram: "12 GB DDR4",
          container: "120 GB NVMe",
          priceEuro: 15.6,
          priceRub: 10,
        },
      ],
      inTarifs2: [
        {
          id: 1,
          tarifName: "VM-2",
          cpu: 1,
          ram: "2 GB DDR4",
          container: 20,
          priceEuro: 4.1,
          priceRub: 431,
        },
        {
          id: 3,
          tarifName: "VM-4",
          cpu: 2,
          ram: "4 GB DDR4",
          container: 40,
          priceEuro: 6.7,
          priceRub: 431,
        },
        {
          id: 4,
          tarifName: "VM-5",
          cpu: 2.5,
          ram: "5 GB DDR4",
          container: 50,
          priceEuro: 8,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-6",
          cpu: 3,
          ram: "6 GB DDR4",
          container: 60,
          priceEuro: 9.3,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-8",
          cpu: 4,
          ram: "8 GB DDR4",
          container: 80,
          priceEuro: 11.9,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-10",
          cpu: 5,
          ram: "10 GB DDR4",
          container: 100,
          priceEuro: 14.5,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-12",
          cpu: 6,
          ram: "12 GB DDR4",
          container: 120,
          priceEuro: 17.1,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-16",
          cpu: 8,
          ram: "16 GB DDR4",
          container: 160,
          priceEuro: 22.3,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-32",
          cpu: 16,
          ram: "32 GB DDR4",
          container: 320,
          priceEuro: 43.1,
          priceRub: 431,
        },
      ],
      table1: ["Название", "CPU", "RAM", "SSD NVMe"],
      computed: {
        toggleTarifs() {
          if (this.picked === 1) {
            return (this.toggle = true);
          } else {
            return (this.toggle = false);
          }
        },
      },
    };
  },
};
(function (s, t, e, p, f, o, r, m) {
  s[t] = s[t] || {};
  s[t][1271651571] = {
    id: "8vGLfm7",
    rnd: 1271651571,
  };
  e.async = true;
  e.src = p + f;
  document[m](o)[r](e);
})(
  window,
  "stepFORM_params",
  document.createElement("script"),
  document.location.protocol === "https:" ? "https:" : "http:",
  "//u027902.stepform.io/api.js?id=8vGLfm7",
  "head",
  "appendChild",
  "querySelector"
);
(function (s, t, e, p, f, o, r, m) {
  s[t] = s[t] || {};
  s[t][1283789748] = {
    id: "AzCaoLN",
    rnd: 1283789748,
  };
  e.async = true;
  e.src = p + f;
  document[m](o)[r](e);
})(
  window,
  "stepFORM_params",
  document.createElement("script"),
  document.location.protocol === "https:" ? "https:" : "http:",
  "//u027902.stepform.io/api.js?id=AzCaoLN",
  "head",
  "appendChild",
  "querySelector"
);
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap');
template {
  display: flex;
  gap: 100px;
  scroll-behavior: smooth;
}
* {
  font-family: 'IBM Plex Sans', sans-serif;
  align-items: center;
}
a {
  text-decoration: none;
  color: rgba(18, 18, 18, 0.6);
}
li {
  list-style-type: none;
  color: rgba(18, 18, 18, 0.6);
  font-size: 16px;
  font-weight: 600;
}
/* nav */
.nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 82px;
  align-items: center;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 50px;
}
.nav-ul {
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 28px;
}
.nav-li {
  font-size: 20px;
  font-weight: 600;
  color: rgba(63, 77, 99, 1);
  font-style: normal;
  font-weight: 700;
}
.ref {
  text-decoration: none;
}
.ref:visited {
  color: rgba(18, 18, 18, 0.6);
}
.nav-btn {
  display: flex;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  padding: 13px 15.97px 13px 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  background: #1d56ec;
  color: rgba(238, 238, 238, 1);
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
}
/* tarifs */
.tarifs {
  display: flex;
  width: 1313px;
  height: 462px;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
}
#btn_1 a {
  color: white;
}
#btn_2 a {
  color: rgba(22, 115, 255, 1);
}
.tarifs-info {
  display: flex;
  width: 532px;
  min-width: 532px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.tarifs-img {
  width: 417.654px;
  height: 389.095px;
  padding-top: 38px;
}
.tarifs-info-host {
  color: var(--t-1, #172944);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.tarifs-info-speed {
  color: var(--t-2, #3f4d63);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.tarifs-btns {
  display: flex;
  gap: 30px;
}
.tarifs-info-btn {
  padding-top: 3px;
  width: 200px;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(22, 115, 255, 1);
  border-radius: 8px;
  border: 0px;
  font-weight: 600;
  padding-bottom: 5px;
}
/* why we */
.about {
  margin: 0 auto;
  text-align: center;
}
.about p {
  color: var(--t-2, #3f4d63);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 0%;
  margin: 50px;
}
/* services */
.services {
  margin: 0 auto;
  text-align: center;
  margin: 50px;
}
.services p {
  color: var(--t-2, #3f4d63);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 0%;
  margin: 50px;
}
.services-games {
  margin-left: 150px;
  margin-top: 50px;
}
/* tables */
input[type="radio"] {
  display: none;
}
input[type="radio"] + label {
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  color: rgba(18, 18, 18, 0.7);
  text-align: center;
  padding: 13px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
input[type="radio"]:checked + label {
  background-color: #1673ff;
  color: #ffffff;
}

.tarifPlans {
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 100px;
}
.tarifPlans-tag {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 27px;
  color: #3F4D63;
}
.tarifPlans-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 678px;
  height: 78px;
  border-radius: 30px;
  margin: auto;
}
/* offers */
.uniqueOffers {
  height: 345px;
  width: 1300px;
  margin: 0 auto;
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.uniqueOffers-text {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 52px;
}
.uniqueOffers-div {
  display: flex;
  gap: 31px;
  align-items: stretch;
  justify-content: center;
}
.uniqueOffers-div-text {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  width: 371px;
  padding-bottom: 10px;
  border-bottom: 3px solid #1d56ec;
}
.questions {
  display: flex;
  width: 1300px;
  margin: auto;
  align-items: center;
  gap: 100px;
}
.questions-info {
  width: 370px;
}
.p-accordion {
  width: 900px;
}
.p-accordion-header {
  width: 900px;
  font-size: 24px;
}
.p-accordion-content {
  width: 900px;
  background-color: white;
  font-size: 40px;
}
.questions-info-top {
  font-size: 59px;
  font-weight: 600;
}
.questions-info-bottom {
  padding-top: 27px;
  font-size: 17px;
  font-weight: 400;
}
.footer {
  margin-top: 120px;
  align-items: center;
  justify-content: center;
  gap: 170px;
  display: grid;
  grid-template-columns: 263px 500px 235px;
}
.footer-left p {
  font-size: 14px;
  color: rgba(18, 18, 18, 0.7);
  padding-left: 30px;
  margin-top: 40px;
  font-weight: 500;
}
.footer-left-p {
  font-size: 14px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 20px;
  color: rgba(17, 17, 17, 1) !important;
}
.footer-middle {
  display: flex;
  line-height: 40px;
}
.footer-middle p {
  font-size: 22px;
  font-weight: 600;
}
.footer-right {
  line-height: 40px;
  text-align: start;
}
.footer-right p {
  color: var(--t-1, #172944);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.footer-right li {
  color: rgba(17, 17, 17, 1);
  font-size: 21px;
  font-weight: 500;
  position: relative;
  padding-left: 40px;
}
.footer-right img {
  margin: 10px 10px 10px 0px;
}
.footer-middle-list {
  width: 250px;
}
</style>
