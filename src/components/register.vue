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
              <div class="box-circle">
                <b-img class="upload" :src="require('../assets/image/avatar.png')" fluid/>
                <p class="upload-text">UPLOAD DISINI</p>
                <p v-if="!form.image && submit" class="image-error">Foto Tidak Ada / Error</p>
              </div>      
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
          <P class="text-left">Ukuran Baju Anak:</P>
          <b-form-select  v-model="form.size" :options="optionsShirt" class="inputText" id="exampleInput1" />
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
         <div v-if="showModal" class="loading"  style="background: rgba(0, 0, 0, 0.7);"> 
           <div class="loading-test">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <P class="white">TUNGGU SEBENTAR <br> YA AYAH/BUNDA</P>
           </div>
         </div>
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
        size: null,
      },
      showModal: false,
      submit: false,
      selected: 'first',
      options: [
        { text: '5 - 7 Tahun', value: 'first' },
        { text: '8 - 10 Tahun', value: 'second' }
      ],
      optionsShirt: [
        { value: null, text: 'Pilih Ukuran Kaos' },
        { value: 'XS', text: 'XS' },
        { value: 'S', text: 'S' },
        { value: 'M', text: 'M' },
        { value: 'L', text: 'L' },
        { value: 'XL', text: 'XL' }
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
        var self = this;
        self.submit = true;
        var form = this.form;
        self.showModal = true;
        axios.post('https://endpoint.lomba.afrakids.com/participant/register',{image:form.image, name:form.name, birth_date:form.date,
        parent_name:form.parent_name, parent_email:form.email, parent_phone:form.parent_phone, parent_address:form.address, kaos: form.size})
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
      if (diffMonth <= 96)
          return 1
      else 
          return 2     
    },
    validation: function(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin: 0px;
  }
  .white {
    color: #888;
    margin-top: 20px;
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
    margin: 30px 0px 10px;
    width: 100px;
    height: 100px;
  }
  .box-circle {
    padding: 10px;
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
  .upload-text {
    font-size: 20px;
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
  .loading {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
  }
  .loading-test {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 30px;
    border-radius: 20px;
  }
  .lds-roller {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #888;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
    .upload-text {
      font-size: 16px;
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
