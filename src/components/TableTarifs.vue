<template>
  <v-table>
    <thead>
      <tr class="table-head">
        <th class="text-left">
          Тариф
        </th>
        <th class="text-left">
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
        </th>
        <th class="text-left">
          Цена (Е)
        </th>
        <th class="text-left">
          Цена (Р)
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
        <td>{{ item.connect }}</td>
        <td>{{ item.priceEuro }}€</td>
        <td>{{ item.priceEuro * 85 }} руб.</td>
        <button class="table-btn">Заказать</button>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
    export default {
        props:['inTarifs'],
    }
</script>

<style scoped>
.table-tarif {
  width: 1069px;
  margin-top: 20px;
  height: 825px;
}
.table-btn {
  width: 105px;
  height: 39px;
  border: none;
  border-radius: 10px;
  background-color: #1673FF;
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 5px;
}
.table {
	width: 100%;
	margin-bottom: 20px;
}
</style>