<template>
  <div>
  <table>
    <thead>
      <tr class="table-head" >
        <th class="text-left" v-for="(text,index) in table" :key="index">
          {{ text }}
        </th>
        <!-- <th class="text-left">
          CPU
        </th>
        <th class="text-left">
          RAM
        </th>
        <th class="text-left">
          Накопитель
        </th>
        <th class="text-left">
          Подключение
        </th> -->
        <th class="text-left">
          Цена (Е)
        </th>
        <th class="text-left">
          Цена (Р)
        </th>
        <th class="text-left">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in inTarifs"
        :key="item.id"
      >
        <td>{{ item.tarifName }}</td>
        <td>{{ item.cpu }}</td>
        <td>{{ item.ram }}</td>
        <td>{{ item.container }}</td>
        <td>{{ item.priceEuro }}€</td>
        <td>{{ (item.priceEuro * 110).toFixed(0) }} руб.</td>
        <td><a class="button" href="https://bill.srvup.ru/billing.php?do=tarifs" target="_blank">Заказать</a></td>
      </tr>
    </tbody>
  </table>
</div>
</template>
/* 105.011600928 */
<script>
    export default {
      data() {
        return {
          toggleTarifs:false
        }
      },
        props:{
          inTarifs:Object,
          table:Array,
          deleteConnect:Boolean
        },
    }
</script>

<style scoped>
* {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.button {
  width: 105px;
  height: 39px;
  border: none;
  border-radius: 10px;
  background-color: #1673FF;
  color: #FFFFFF;
  margin-left: 35px;
  text-decoration: none;
  display: block;
  padding-top: 10px;
}
table {
  width: 90%;
  margin: 0 auto;
  border-spacing:0px 15px;
  text-align: center;
  position: relative;
}
thead tr {
  background-color: #FFFFFF;
  display: block;
  width: 100%;
  margin-left:12px;
  border-radius: 10px 10px 0 0;
}
thead th {
  padding-left: 54px;
    padding-right: 36px;
}
table-head {
  display: block;
  width: 100%;
}
tr {
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
tbody tr {
  display: block;
  width: 100%;
  margin: 10px;
  border-radius: 20px;
}
tbody td {
  padding-left: 33px;
    padding-right: 38px;
  width: 170px;
}
.text-left {
  margin-left: 10px;
  width: 166px;
}
@media screen and (max-width: 980px) {
  table {
    width: 90%;
  }
  .table-head {
    width: 830px;
  }
  thead th {
    padding-left: 10px;
    padding-left: 60px;
  }
}
@media screen and (max-width: 650px) {
  * {
    font-size: 12px;
  }
  table {
    width: 90%;
  }
  .table-head {
    width: 550px;
  }
  thead th {
    padding-left: 10px;
  }
  tbody tr{
   width: 550px;
  }
  tbody td {
    padding-left: 5px;
    padding-right: 5px;
    width: 120px;
  }
}
@media screen and (max-width:480px) {
  table {
    width: 200px;
  }
  .table-head {
    width: 350px;
    padding: 10px;
    margin: 5px;
  }
  thead th {
    padding-left: 0px;
    padding-right: 0px;
  }
  tbody tr{
   width: 350px;
   padding: 10px;
   margin: 5px;
  }
  tbody td {
    padding-left: 5px;
    padding-right: 5px;
    width: 120px;
  }
  #app > div.tarifPlans > div.tarifPlans-table > table > thead > tr > th {
    font-size: 10px;
  }
  #app > div.tarifPlans > div.tarifPlans-table > table > tbody > tr > td {
    font-size: 10px;
  }
  .button {
    width: 40px;
    height: 30px;
    margin: 0;
    font-size: 8px;
  }
}
</style>