<template>
  <!-- nav -->
  <div class="nav">
    <img src="@/assets/header_logo.png" width="150" />
    <ul class="nav-ul">
      <a class="ref" href="#tarifPlans"><li class="nav-li">Тарифы</li></a>
      <a class="ref" href="#questions"><li class="nav-li">FAQ</li></a>
      <a class="ref" href=" https://wiki.srvup.ru/support" target="_blank"
        ><li class="nav-li">Поддержка</li></a
      >
      <a class="ref" href="https://wiki.srvup.ru/" target="_blank"
        ><li class="nav-li">База знаний</li></a
      >
      <a
        class="ref"
        href="https://reviews.srvup.ru"
        target="_blank"
        >
        <li class="nav-li">Отзывы</li>
        </a
      >
    </ul>
    <a
      href="https://bill.srvup.ru/"
      target="_blank"
      style="color: white"
      class="button"
      >Биллинг</a
    >
    <div class="burger">
    <!-- burger -->
    <div>
    <el-icon @click="toggleMenu" size="60" color="rgba(29, 86, 236, 1)"
      ><svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        data-v-ea893728=""
      >
        <path
          fill="currentColor"
          d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
        ></path></svg
    ></el-icon>
  </div>
    <div class="burgerMenu menu-hidden" :class="{'menu-visible' : menuVisible,'unscroll': menuVisible}">
      <el-icon  @click="toggleMenu" size="50" color="rgba(29, 86, 236, 1)"
      ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg></el-icon>
      <ul class="burgerMenu-ul">
      <a @click="toggleMenu" class="ref" href="#tarifPlans"><li class="burgerMenu-li">Тарифы</li></a>
      <a @click="toggleMenu" class="ref" href="#questions"><li class="burgerMenu-li">FAQ</li></a>
      <a @click="toggleMenu" class="ref" href=" https://wiki.srvup.ru/support" target="_blank"
        ><li class="burgerMenu-li">Поддержка</li></a
      >
      <a class="ref" href="https://wiki.srvup.ru/" target="_blank"
        ><li class="burgerMenu-li">База знаний</li></a
      >
      <a
        class="ref"
        @click="toggleMenu"
        href="https://reviews.srvup.ru"
        target="_blank"
        ><li class="burgerMenu-li">Отзывы</li></a
      >
    </ul>
    <a
      href="https://bill.srvup.ru/"
      target="_blank"
      style="color: white"
      class="button"
      >Биллинг</a
    >
    <div>
    </div>
    </div>
  </div>
  </div>
  <div class="container">
    <!-- tarifs? -->
    <div class="tarifs">
      <div class="tarifs-info">
        <p class="tarifs-info-host">
          Мощный хостинг<br />
          с Anti-DDoS Game защитой для проектов любых сложностей
        </p>
        <p class="tarifs-info-speed">
          Чтобы вы могли убедиться в качестве нашего хостинга, мы предлагаем<br />
          тестовый период. Вы сможете оценить нашу производительность и<br />
          функциональность перед принятием окончательного решения.
        </p>
        <div class="tarifs-btns">
          <a id="btn_1" class="button" href="https://trial.srvup.ru" target="_blank"
            >Протестировать сервер</a
          >
          <a
            id="btn_2"
            class="button"
            href="#tarifPlans"
            style="
              background-color: white;
              border: 2px solid rgba(29, 86, 236, 1);
              color: rgba(29, 86, 236, 1);
            "
          >
            Посмотреть тарифы
          </a>
        </div>
      </div>
      <img class="tarifs-img" src="@/assets/image2.png" />
    </div>
    <!-- about -->
    <div class="about">
      <div><p>Почему выбирают нас?</p></div>
      <div class="div-about">
        <img src="@/assets/rocket.png" />
        <img src="@/assets/shield.png" />
        <img src="@/assets/clock.png" />
      </div>
      <div>
        <img src="@/assets/free.png" />
        <img src="@/assets/hands.png" />
        <img src="@/assets/sysAdmin.png" />
      </div>
      <div>
        <img src="@/assets/lamp.png" />
        <img src="@/assets/sandClock.png" />
        <img src="@/assets/moneyBag.png" />
      </div>
    </div>
    <!-- services -->
    <div class="services">
      <p>Поддерживаемые игры и программы</p>
      <div class="services-games">
        <img src="@/assets/games.png" />

      </div>
    </div>
    <!-- plans -->
    <div class="tarifPlans">
      <p class="tarifPlans-tag" id="tarifPlans">Тарифные планы</p>
      <div class="tarifPlans-buttons">
        <input checked type="radio" id="one" value="1" v-model="picked" />
        <label for="one">Игровые сервера</label>
        <input type="radio" id="two" value="2" v-model="picked" />
        <label for="two">VDS</label>
        <a class="button" href="https://dedic.srvup.ru/" target="_blank"
          >Выделенный сервер</a
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
      <div
        style="margin-bottom: 20px"
        class="stepform_8vGLfm7 rnd_1271651571"
        v-show="picked == 1"
      ></div>
      <div class="stepform_AzCaoLN rnd_1283789748" v-show="picked == 2"></div>
    </div>
    <div class="uniqueOffers">
      <p class="uniqueOffers-text">Уникальные предложения</p>
      <div class="uniqueOffers-div">
        <p class="uniqueOffers-div-text">Скидка 5% при оплате за три месяца</p>
        <p class="uniqueOffers-div-text">15% за приглашенного друга</p>
        <p class="uniqueOffers-div-text">
          Если найдете дешевле, сделаем скидку
        </p>
      </div>
    </div>
    <div class="questions" id="questions">
      <div class="questions-info">
        <p class="questions-info-top">Часто задаваемые вопросы</p>
        <p class="questions-info-bottom">
          Не нашли ответа на вопрос?<br />
          Загляните в нашу
          <a
            style="text-decoration: underline"
            target="_blank"
            href="https://wiki.srvup.ru/"
            >базу знаний</a
          >
          или<br />
          напишите нам, мы будем рады помочь!
        </p>
      </div>
      <div class="text-subtitle-2 mt-4 mb-2"></div>
      <Accordion>
        <AccordionTab header="Как долго активируется мой сервер?">
          <p>
            Активация игрового сервера обычно занимает всего несколько минут
            после оформления заказа за исключением тестового периода и
            форс-мажорных ситуаций. В случае с VDS как только вы заплатите за
            услугу и установка сервера будет завершена, вы сможете приступить к
            управлению своим сервером.
          </p>
        </AccordionTab>
        <AccordionTab header="Сколько человек выдержит мой игровой сервер?">
          <div>
            <p>
              Вместимость вашего игрового сервера зависит от выбранного вами
              тарифного плана. Мы предоставляем различные варианты, которые
              поддерживают разное количество одновременных игроков. Наши тарифы
              позволяют выдерживать от нескольких десятков до нескольких сотен
              игроков одновременно. Подробную информацию вы можете получить в
              базе знаний или уточнить у нашей службы поддержки.
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
        <AccordionTab header="На каком процессоре будет работать мой сервер?">
          <p>
            Ваш сервер будет работать на процессоре AMD Ryzen 7 3800X, идеально
            подходящем для игровых серверов, включая Minecraft. С мощными 8
            ядрами и 16 потоками, этот процессор обеспечивает высокую
            производительность и плавный геймплей. С его частотой 4.5 ГГц вы
            получите быстрые вычисления и качественный игровой опыт.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
    <div class="footer">
      <div class="footer-left">
        <img class="logo" src="@/assets/header_logo.png" />
        <p>
          Клиентоорентированный
          хостинг,<br />
           которому нет
          равных!
        </p>
        <p class="footer-left-p">2023 All right reserved. SrvUP</p>
      </div>
      <div class="footer-middle">
        <ul class="footer-middle-list">
          <p>Ссылки</p>
          <li>
            <a href="https://wiki.srvup.ru/" target="_blank">База знаний</a>
          </li>
          <li>
            <a href="https://vk.com/topic-200598401_49056856" target="_blank"
              >Отзывы</a
            >
          </li>
          <li><a href="https://bill.srvup.ru">Биллинг</a></li>
        </ul>
      </div>
      <div>
        <ul class="footer-middle-list">
          <p>Документы</p>
          <li>
            <a href="https://wiki.srvup.ru/terms-of-use" target="_blank"
              >Пользовательское соглашение</a
            >
          </li>
          <li>
            <a href="https://wiki.srvup.ru/privacy-policy" target="_blank"
              >Политика конфиденциальности</a
            >
          </li>
        </ul>
      </div>
      <div class="footer-right">
        <div>
          <p>
            Мы в социальных<br />
            сетях
          </p>
          <a href="https://tg.srvup.ru" target="_blank"
            ><img src="@/assets/tg_icon.png"
          /></a>
          <a href="https://vk.srvup.ru" target="_blank"
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
    </div>
  </div>
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
      menuVisible: false,
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
          tarifName: "GS-1",
          cpu: "0.5 vCore",
          ram: "1 GB DDR4",
          container: "10 GB NVMe",
          priceEuro: 1.4,
          priceRub: 0,
        },
        {
          id: 2,
          tarifName: "GS-2",
          cpu: "1 vCore",
          ram: "2 GB DDR4",
          container: "20 GB NVMe",
          priceEuro: 2.8,
          priceRub: 10,
        },
        {
          id: 3,
          tarifName: "GS-3",
          cpu: "1.5 vCore",
          ram: "3 GB DDR4",
          container: "30 GB NVMe",
          priceEuro: 4.2,
          priceRub: 10,
        },
        {
          id: 4,
          tarifName: "GS-4",
          cpu: "2 vCore",
          ram: "4 GB DDR4",
          container: "40 GB NVMe",
          priceEuro: 5.6,
          priceRub: 10,
        },
        {
          id: 5,
          tarifName: "GS-5",
          cpu: "2.5 vCore",
          ram: "5 GB DDR4",
          container: "50 GB NVMe",
          priceEuro: 7,
          priceRub: 10,
        },
        {
          id: 6,
          tarifName: "GS-6",
          cpu: "3 vCore",
          ram: "6 GB DDR4",
          container: "60 GB NVMe",
          priceEuro: 8.4,
          priceRub: 10,
        },
        {
          id: 7,
          tarifName: "GS-8",
          cpu: "4 vCore",
          ram: "8 GB DDR4",
          container: "80 GB NVMe",
          priceEuro: 11.2,
          priceRub: 10,
        },
        {
          id: 8,
          tarifName: "GS-10",
          cpu: "5 vCore",
          ram: "10 GB DDR4",
          container: "100 GB NVMe",
          priceEuro: 14,
          priceRub: 10,
        },
        {
          id: 9,
          tarifName: "GS-12",
          cpu: "6 vCore",
          ram: "12 GB DDR4",
          container: "120 GB NVMe",
          priceEuro: 16.8,
          priceRub: 10,
        },
      ],
      inTarifs2: [
        {
          id: 1,
          tarifName: "VM-2",
          cpu: "1 vCore",
          ram: "2 GB DDR4",
          container: "20 GB NVMe",
          priceEuro: 4.1,
          priceRub: 431,
        },
        {
          id: 3,
          tarifName: "VM-4",
          cpu: "2 vCore",
          ram: "4 GB DDR4",
          container: "40 GB NVMe",
          priceEuro: 6.7,
          priceRub: 431,
        },
        {
          id: 4,
          tarifName: "VM-5",
          cpu: "2.5 vCore",
          ram: "5 GB DDR4",
          container: "50 GB NVMe",
          priceEuro: 8,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-6",
          cpu: "3 vCore",
          ram: "6 GB DDR4",
          container: "60 GB NVMe",
          priceEuro: 9.3,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-8",
          cpu: "4 vCore",
          ram: "8 GB DDR4",
          container: "80 GB NVMe",
          priceEuro: 11.9,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-10",
          cpu: "5 vCore",
          ram: "10 GB DDR4",
          container: "100 GB NVMe",
          priceEuro: 14.5,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-12",
          cpu: "6 vCore",
          ram: "12 GB DDR4",
          container: "120 GB NVMe",
          priceEuro: 17.1,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-16",
          cpu: "8 vCore",
          ram: "16 GB DDR4",
          container: "160 GB NVMe",
          priceEuro: 22.3,
          priceRub: 431,
        },
        {
          id: 5,
          tarifName: "VM-32",
          cpu: "16 vCore",
          ram: "32 GB DDR4",
          container: "320 GB NVMe",
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
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  }
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
<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap");
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.container {
  width: 1366px;
  margin: 0 auto;
}
@media (min-width: 1366px) {
  .burger {
    display: none;
  }
}
@media (min-width: 600px) {
  .burger {
    display: none;
  }
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
.nav-ul {
  display: flex;
  gap: 10px;
  flex-direction: row;
}
.nav-ul a {
  color: #3f4d63;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
}
.nav-ul a:hover {
  color: #1652eb;
  transition: 0.7s;
}
#app > div.nav > a {
  color: white;
  font-size: 20px;
  font-weight: 700;
  background: #1d56ec;
  border-radius: 8px;
  padding: 8px 15px;
}
.tarifs {
  background: white;
  border-radius: 50px;
  display: flex;
  padding: 10px 90px 10px 90px;
  gap: 100px;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 100px 0px;
}
.tarifs-info-host {
  color: var(--t1, #172944);
  font-size: 40px;
  line-height: normal;
  font-weight: 700;
  font-style: normal;
  padding-bottom: 24px;
}
.tarifs-info-speed {
  font-size: 16px;
  color: var(--t2, #3f4d63);
  padding-bottom: 24px;
  font-weight: 400;
  line-height: 24px;
}
.tarifs-btns {
  display: flex;
  gap: 30px;
}
#btn_1 {
  width: 200px;
  min-height: 48px;
  padding: 14px 15px 14px 15px;
  background: #1d56ec;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}
#btn_2 {
  width: 200px;
  min-height: 48px;
  padding: 14px 15px 14px 15px;
  background: white;
  border-radius: 8px;
  color: #1d56ec;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0px 50px 0px;
}
.about p {
  color: #3f4d63;
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 20px;
}
.services {
  margin: 50px 0px 50px 0px;
}
.services p {
  text-align: center;
  color: #3f4d63;
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 20px;
}
.services img {
  margin-left: 180px;
}
#tarifPlans {
  text-align: center;
  color: #3f4d63;
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 20px;
  margin-bottom: 10px;
}
.tarifPlans-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}
.tarifPlans-buttons a {
  background: white;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(18, 18, 18, 0.7);
  padding: 13px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
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
  cursor: pointer;
}
input[type="radio"]:checked + label {
  background-color: #1673ff;
  color: #ffffff;
}
.uniqueOffers {
  margin: 50px 0px 50px 0px;
  background: white;
  border-radius: 50px;
  padding: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.uniqueOffers-text {
  text-align: center;
  color: #3f4d63;
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 20px;
}
.uniqueOffers-div {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.uniqueOffers-div-text {
  color: #172944;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  width: 370px;
  border-bottom: 4px solid #1d56ec;
}
.questions {
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  margin: 50px 0px 50px 0px;
  min-height: 500px;
  align-items: center;
  padding: 30px 0;
}
.questions-info {
  max-width: 450px;
}
#questions > div.questions-info > p.questions-info-top {
  color: var(--t1, #172944);
  font-family: IBM Plex Sans;
  font-size: 59px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px;
}
.questions-info-bottom {
  color: var(--t2, #3f4d63);
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin: 50px 0px 50px 0px;
  line-height: 40px;
}
.footer-right img {
  margin-left: 5px;
  margin-right: 5px;
}
#app > div.container > div.footer > div.footer-left > p.footer-left-p {
  font-size: 18px;
}
.footer p {
  color: #172944;
  font-size: 22px;
  font-weight: 700;
}

#app > div.container > div.footer > div.footer-left > p:nth-child(2) {
  font-size: 16px;
  font-weight: 500;
}
.footer a {
  color: #3f4d63;
}
#questions > div.p-accordion.p-component {
  width: 900px;
}
@media screen and (max-width: 480px) {
  .container {
    width: 350px;
  }
  .unscroll {
    overflow-y: hidden;
  }
  .burgerMenu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #e4e8eb;
    transition: left 0.5s;
    overflow-x: hidden;
  }
  .menu-hidden {
    left: -100%;
  }
  .menu-visible {
    left: 0;
  }
  .burgerMenu-ul {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 20px;
}
.nav-ul {
  display: none;
}
#app > div.nav > a {
  display: none;
}
#app > div.nav > div > div.burgerMenu.menu-hidden.menu-visible > a {
  color: white;
  font-size: 20px;
  font-weight: 700;
  background: #1d56ec;
  border-radius: 8px;
  padding: 8px 15px;
  margin-left: 10px;
}
.burgerMenu-ul a {
  color: #3f4d63;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
}
.burgerMenu-ul a:hover {
  color: #1652eb;
  transition: 0.7s;
}
  .tarifs {
    display: block;
    padding: 20px;
  }
  .tarifs-info-host {
    font-size: 22px;
  }
  .tarifs img {
    display: none;
  }
  .about {
    text-align: center;
  }
  .about img {
    width: 280px;
    height: auto;
  }
  .about p {
    font-size: 24px;
  }
  .services p {
    font-size: 22px;
  }
  .services-games img {
    margin: 0;
    width: 400px;
  }
  #tarifPlans {
    font-size: 22px;
  }
  .tarifPlans-buttons {
    gap: 5px;
  }
  input[type="radio"] + label {
    padding: 4px;
    font-size: 14px;
  }
  #app
    > div.container
    > div.tarifPlans
    > div.tarifPlans-buttons
    > label:nth-child(4) {
    padding-top: 15px;
  }
  .tarifPlans-buttons a {
    text-align: center;
    padding: 4px;
    font-size: 14px;
  }
  .uniqueOffers-div {
    flex-direction: column;
  }
  .uniqueOffers-div-text {
    width: 270px;
  }
  .questions {
    flex-direction: column;
    gap: 10px;
  }
  #questions > div.questions-info > p.questions-info-top {
    font-size: 25px;
  }
  .questions-info-bottom {
    font-size: 16px;
  }
  #questions > div.p-accordion.p-component {
    width: 370px;
  }
  .footer {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .footer-left,
  .footer-middle-list,
  .footer-right {
    text-align: center;
  }
}
</style>
