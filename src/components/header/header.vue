<template>
  <div class="header">
    <div>
      <input type="text" @click="inputFunc" v-model="inputValue" class="input-css">
    </div>
    <div v-show="show" class="citylist">
      <div class="city-content">
        <div class="tab">
          <div v-for="(tab,index) in this.tabs()" class="tab-item"
               v-on:click="selectMenu(index ,$event)">
            <span class="tab-type" :class="{'active':currentIndex===index}">{{tab}}</span>
          </div>
        </div>
        <div v-for="x in this.code()">
          <div v-for="(city,index) in citys[x]" class="citytitle">
            <div class="cityleft">{{x}}</div>
            <div class="cityright"><span v-for="(cityname,index2) in city"
                                         @click="select(cityname.name)">{{cityname.name}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="filtercity" v-show="cityshow">
      <ul>
        <li v-for="(city,index) in citys">
          <span @click="select(city.name)">{{city.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        citys: [],
        show: false,
        cityshow: false,
        currentIndex: 0,
        inputValue: ''
      };
    },
    watch: {
      inputValue (curVal) {
        if (curVal !== null || curVal !== '') {
          let str = curVal.toUpperCase();
          this.show = false;
          this.citys = [];
          for (let i = 0; i < this.cityLists().length; i++) {
            if (this.cityLists()[i].name.indexOf(str) >= 0 || this.cityLists()[i].code.indexOf(str) >= 0 ||
              this.cityLists()[i].eName.toUpperCase().indexOf(str) >= 0 || this.cityLists()[i].szm.indexOf(str) >= 0) {
              this.citys.push(this.cityLists()[i]);
            }
          }
          this.cityshow = true;
        }
        if (curVal === '') {
          this.hotcitylist();
          this.cityshow = false;
        }
      }
    },
    methods: {
      inputFunc () {
        this.hotcitylist();
        this.show = !this.show;
        if (this.show) {
          this.cityshow = false;
        }
      },
      selectMenu (index, event) {
        this.cityshow = false;
        this.currentIndex = index;
        this.citys = [];
        if (index === 0) {
          this.hotcitylist();
        } else {
          let str = this.tabs()[index];
          for (let i in this.cityList()) {
            if (str.indexOf(i) >= 0) {
              this.citys[i] = [];
              this.citys[i].push(this.cityList()[i]);
            }
          }
        }
      },
      hotcitylist () {
        this.citys['热门'] = [];
        this.citys['热门'].push(this.hotcity());
      },
      select (name) {
        this.inputValue = name;
        this.show = false;
        this.cityshow = !this.cityshow;
//        console.log(this.cityshow);
      }
    }
  };
</script>

<style>
  .city-content {
    width: 500px;
  }

  .city-content .tab {
    display: flex;
    margin-top: 20px;
  }

  .city-content .tab-item {
    flex: 1;
    text-align: center;
  }

  .city-content .tab-type {
    display: inline-block;
    color: #00b43c;
    line-height: 22px;
  }

  .active {
    font-weight: 700;
    border-bottom: 1px solid #00b43c;
  }

  .filtercity {
    width: 150px;
    border: 1px solid #ddd;
    margin-left: 20px;
    height: 200px;
    overflow: auto;
  }

  .input-css {
    border: 1px solid #ddd;
    margin-left: 20px;
  }

  .citylist {
    width: 500px;
    border: 1px solid #ddd;
    height: auto;
    margin-left: 20px;
  }

  .citytitle {
    display: flex;
    font-size: 14px;
    line-height: 24px;
    margin: 20px 0px;

  }

  .cityleft {
    flex: 0 0 80px;
    text-align: center;
    color: #00b43c;
    font-weight: 700;
  }

  .cityright {
    flex: 1;
    text-align: left;
  }

  .cityright span {
    display: inline-block;
    width: 80px;
  }

  .cityright span:hover {
    font-weight: 700;
    color: #00b43c;
  }

  .filtercity ul {
    margin: 0;
    padding: 0;
  }

  .filtercity li {
    list-style: none;
    margin: 5px 0;
  }

  .filtercity li:hover {
    background: #00b43c;
    color: #fff;
  }
</style>
