//PAGE ANNONCE
<template>
    <div class="row">
            <!-- <div class="titreAnnonce">
                <span>Les Annonces de Marcel</span>
                <button class="btn fill">+ Poster une annonce</button>
            </div> -->
            <!-- <div class="col mt-3">
                <div class="card">
                    <div class="card-header">
                        <form class="form-inline">
                            <div class="form-group mb-2">
                                <label for="inputImport" class="titreAnnonce">Les Annonces de Marcel</label>
                            </div>
                            <div class="form-group ml-2 mb-2">
                                <button class="btn btn-outline-primary" type="button">JSON</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-body">
                        <textarea class="form-control" id="inputInport" rows="25"></textarea>
                    </div>
                </div>
            </div> -->
        </div>
</template>
<script>
    export default{
        name: 'UneImport'
    }
</script>
<style scoped>
    .titreAnnonce{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1%;
        font-size: 20px;
    }
    .row{
        display: flex;
        flex-direction: column;
    }
    .btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}
.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}
.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;    
}

.titreAnnonce{
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.titreAnnonce span{
  margin-right: 5%;
  background-color: grey;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;
}
</style>