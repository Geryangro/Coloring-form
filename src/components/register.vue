<template>
  <div>
    <b-col class="register">
      <b-row>
        <b-col md="12" class="upload_picture">
          <h2>Daftarkan anak Anda dengan <br> 
            mengisi form dibawah ini!
          </h2>
          <div v-if="!form.image">
            <div class="circle" @click="pictureClick($refs.inputImage)">
              <b-img class="upload" :src="require('../assets/image/avatar.png')" fluid/>
              <p>upload</p>        
            </div>
          </div>
          <div v-else>
            <div class="circle">
              <b-img class="upload-ava" :src="form.image" fluid/>
            </div>
          </div>
          <b-form-file ref="inputImage" v-model="form.image" @change="imageHandler" :state="Boolean(file)" placeholder="Choose a file..."  style="display: none;" ></b-form-file>
          <h2>
            Upload foto anak anda <br>
            MAX : 1 MB
          </h2>
        </b-col>
      </b-row>
    </b-col>
    <b-col md="12" class="background_grey">
      <b-row>
        <b-col md="8" offset-md="2">
          <b-form-group id="exampleInputGroup1" label-for="exampleInput1">
          <P class="text-left">Nama Anak Lengkap :</P>
          <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.name" required>
          </b-form-input>
          <P class="text-left">Tanggal Lahir Anak :</P>
          <b-form-input class="inputText" id="exampleInput1" type="date" v-model="form.date" required>
          </b-form-input>
          <div v-if="form.category != ''">
            <P class="text-left">Kategori :</P>
            <h4 class="text-left" v-if="form.category == 1">Kategori 1 <span class="green">(5 - 7 Tahun)</span></h4>
            <h4 class="text-left" v-else-if="form.category == 2">Kategori 2 <span class="blue">(8 - 10 Tahun)</span></h4>
          </div>
          <b-row>
            <b-col md="6">
              <P class="text-left">Nama Orang Tua :</P>
              <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.parent_name" required>
              </b-form-input>
            </b-col>
            <b-col md="6">
              <P class="text-left">No Handphone :</P>
              <b-form-input class="inputText" id="exampleInput1" type="number" v-model="form.parent_phone" required>
              </b-form-input>
            </b-col>
          </b-row>
          <P class="text-left">Email :</P>
          <b-form-input class="inputText" id="exampleInput1" type="text" v-model="form.email" required>
          </b-form-input>
          <P class="text-left">Alamat :</P>
          <b-form-input class="inputText" size="lg" id="exampleInput1" type="text" v-model="form.address" required>
          </b-form-input>
          <b-button v-on:click="submitForm" class="dftr">
            DAFTAR SEKARANG
          </b-button>
         </b-form-group>
        </b-col>
      </b-row>
    </b-col>
    <footbar />
  </div>
</template>

<script>
import footbar from '@/components/footbar.vue'
import axios from 'axios'

export default {
  name: 'register',
  components: {
    footbar
  },
  data () {
    return {
      file: null,
      form: {
        image: '',
        name: '',
        date: '',
        email: '',
        address: '',
        parent_name: '',
        parent_phone: '',
        category: '',
      },
      selected: 'first',
      options: [
        { text: '5 - 7 Tahun', value: 'first' },
        { text: '8 - 10 Tahun', value: 'second' }
      ]
    }
  },
  watch: {
    'form.date': function(val){
      this.form.category = this.selectCategory(val)
    }
  },
  created: function(){
    
  },
  methods: {
    imageHandler(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    },
    createImage(file) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
            vm.$set(vm.form, 'image', e.target.result);
        };
        reader.readAsDataURL(file);

    },
    pictureClick(target){
      target.$el.children[0].click();
    },
    submitForm: function() {
      console.log('test')
        var self = this;
        var form = this.form;
        console.log(form);
        axios.post('https://endpoint.lomba.afrakids.com/participant/register',{image:form.image, name:form.name, birth_date:form.date,
        parent_name:form.parent_name, parent_email:form.email, parent_phone:form.parent_phone, parent_address:form.address})
        .then(function (response){
          window.location = '/transfer'
        })
        .catch(function (error){
           error
        })
    },
    selectCategory: function(date){
      var now = new Date()
      var birthDate = new Date(date)

      var diffMonth = (now.getFullYear() * 12 + now.getMonth()) - (birthDate.getFullYear() * 12 + birthDate.getMonth())
      if (diffMonth <= 84)
          return 1
      else 
          return 2     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin: 0px;
  }
  .text-left {
    text-align: left;
    font-size: 20px;
  }
  .register {
    background-image: url('../assets/image/background_form.jpg');
    background-size: 100% 100%;
    height: 660px;
    padding: 20px;
  }
  .upload_picture {
    margin-top: 5%;
  }
  .upload {
    margin: 30px 0px 20px;
    width: 100px;
    height: 100px;
  }
  .upload-ava {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
  .circle {
    border: 4px dashed #888;
    border-radius: 50%;
    margin: 40px auto;
    padding: 10px;
    width: 230px;
    height: 230px;
  }
  .background_grey {
    background-color: #F2F2F4;
    padding: 20px;
  }
  .inputText {
    margin: 0px 0px 20px;
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 4px 4px 6px 0px rgba(184,184,184,1);
    -moz-box-shadow: 4px 4px 6px 0px rgba(184,184,184,1);
    box-shadow: 4px 4px 6px 0px rgba(184,184,184,1);
  }
  .dftr {
    background-color: #F4AF15;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    width: 400px;
    font-size: 26px;
    margin-top: 20px;
    border-radius: 15px;
  }
  @media screen and (max-width: 760px) {
    .register {
      background-image: url('../assets/image/background-formmobile.jpg');
      background-size: 100% 100%;
      height: 350px;
      padding: 20px;
    }
    h2 {
      margin-top: 20px;
      font-size: 18px;
    }
    .circle {
      border: 4px dashed #888;
      border-radius: 50%;
      margin: 10px auto;
      padding: 10px;
      width: 160px;
      height: 160px;
    }
    .upload {
      margin: 10px 0px 20px;
      width: 60px;
      height: 60px;
    }
    .upload-ava {
      border-radius: 50%;
      width: 130px;
      height: 130px;
    }
    .dftr {
        width: 100%;
        margin-top: 10px;
        font-size: 16px;
    }
  }
</style>
