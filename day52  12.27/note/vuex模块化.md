- 拆的依据
  - 根据功能来拆
    - 比如：如数据是大部分的组件公用的，则可以选择不拆留在index.js中
- 拆分完的模块，会放在store/modules/*.js
  - 默认导出（拆分完的state、mutations、actions、getters）
- 在store/index.js中引入各个模块化的module文件，并且在modules对象中去注册





以城市模块为例，将城市的状态管理数据从index.js中抽离出去，形成：store/modules/cityStore.js

~~~javascript
// 导出
export default {
    state: {
        city: {
            cityId: 0,
            cityName: "",
        },
    },
    mutations: {
        setCity(state, city) {
            state.city = city;
        },
    },
    actions: {},
    getters: {},
};
~~~

在store/index.js中导入刚才分离出去的模块并注册：

~~~javascript
import cityStore from './modules/cityStore'
~~~

~~~javascript
modules: {
    cityStore,
},
~~~

- 拆分完之后的使用方式

~~~javascript
// console.log(cityId,name);
// 将数据写入到vuex中共享，并且返回到其他页面
// this.$store.commit("setCity", { cityId, cityName });
// 回退到上一页
// this.$router.back();

// 抽离后的vuex的操作方式
// 获取方式
console.log(this.$store.state.cityStore.city.cityId);
console.log(this.cityStore.city.cityId);
// 修改方式
// 默认情况下，修改是不需要加模块的名称的，直接按照之前的写法即可
// “默认”认为数据源可能会出现重名的情况，但是方法会被与整体的方法进行合并（“默认”方法不重名）
// 未使用命名空间的写法
// this.$store.commit("setCity", { cityId, cityName });
// 使用命名空间
// console.log(this.$store.commit('cityStore/setCity',{ cityId, cityName }));
// 使用map映射的方式的写法
// this.setCity({ cityId, cityName });

// 获取getters
console.log(this.$store.getters["cityStore/dealCity"]);
~~~

模块化还支持命名空间以防止函数或者数据源与其他模块重名而产生冲突，但是一旦使用了命名空间后续在所有的vuex操作时都需要加上命名空间。开启命名空间的方式：在模块时，里面设置一个属性：

~~~javascript
namespaced: true
~~~

