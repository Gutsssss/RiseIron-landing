<template>
  <table >
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
        <template v-if="deleteConnect">
        <td>{{ item.connect }}</td>
      </template>
        <td>{{ item.priceEuro }}€</td>
        <td>{{ item.priceEuro * 85 }} руб.</td>
        <td><button class="table-btn"><a href="https://bill.srvup.ru/billing.php?do=tarifs" target="_blank">Заказать</a></button></td>
      </tr>
    <!-- <template v-if="!toggleTarifs">
      <tr
        v-for="item in inTarifs2"
        :key="item.id"
      >
        <td>{{ item.tarifName }}</td>
        <td>{{ item.cpu }}</td>
        <td>{{ item.ram }}</td>
        <td>{{ item.SSD }}</td>
        <td>{{ item.priceEuro }}€</td>
        <td>{{ item.priceEuro * 85 }} руб.</td>
        <td><button class="table-btn"><a href="https://bill.srvup.ru/billing.php?do=tarifs" target="_blank">Заказать</a></button></td>
      </tr>
    </template> -->
    </tbody>
  </table>
</template>

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
}
.table-btn {
  width: 105px;
  height: 39px;
  border: none;
  border-radius: 10px;
  background-color: #1673FF;
  color: #FFFFFF;
  margin-left: 35px;
}
.table-btn a {
  text-decoration: none;
  color: white;
}
table {
  width: 1200px;
  margin: 0 auto;
  border-spacing:0px 15px;
  text-align: center;
  position: relative;
}
thead tr {
  background-color: #FFFFFF;
  display: block;
  width: 100%;
  margin-left:23px;
  border-radius: 10px 10px 0 0;
}
thead th {
  padding-left: 25px;
    padding-right: 36px;
}
table-head {
  display: block;
  width: 100%;
}
tr {
  background-color: #FFFFFF;
}
tbody tr {
  display: block;
  width: 100%;
  margin: 20px;
  border-radius: 20px;
}
tbody td {
  padding-left: 6px;
    padding-right: 50px;
  width: 150px;
}
.text-left {
  margin-left: 10px;
  width: 140px;
}
</style>