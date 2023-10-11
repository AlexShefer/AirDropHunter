export function renderProductGrid(arr) {
    const cards = arr.map((element) => {
        return `
        <div id="${
            element.id
        }" class="col-12 col-md-6 col-lg-4 blk blk_airdrop">
        <div class="card-el rounded border-1">
            <div>
                <div  class="d-flex align-items-center mt-2">
                    <img
                        src="./public/icons/${element.id}.png"
                        alt="${element.id}"
                        width="32px'
                        height="32px'
                        class="img-fluid me-2"
                    />
                    <h2 class="card-title m-0">${element.name}</h2>
                </div>
                <p class="card-el-info mb-4 text-start mt-2">${
                    element.shortInfo
                }</p>
                <button class='bg-white text-primary border-0 mb-2'>Read More</button>
                <div class="card-el-assessment">
                    <h5>On artificial AI:</h5>
                    <div>
                        <div class="row">
                            <p class="card-el-assessment-head mb-0 col-7">expected airdrop</p>
                            <p class="card-el-assessment-head mb-0 col-5">probability</p>
                        </div>
                        <div class="row">
                            <p class=" mb-0 col-7">
                                $${element.expectedAirdrop[0]} -
                                $${element.expectedAirdrop[1]}
                            </p>
                            <p class=" mb-0 col-5">${element.probability}%</p>
                        </div>
                    </div>
                </div>
                    
                <div id="tariff-${element.id}" class="tariff-table mt-2 row">
                        <div  class="col-6 text-muted mb-2 ">Tariff</div>
                        <div class="col-6 text-muted mb-2 ">Cost,$</div>
                        
                        ${generateTariffTable(
                            element.tariffs,
                            element.tariffStatus
                        )}
                </div>
                
                <button class="btn btn-lg btn-secondary border-primary col-12">Buy</button>
                <div class="badge">${element.tariffStatus}</div>
            </div>
        </div>
    </div>
        `;
    });
    document.getElementById("product-grid").innerHTML = cards.join("");
}

function generateTariffTable(arr, status) {
    const table = arr.map((element) => {
        return `
                <div class="col-1 mb-4"></div>
                <div class="col-5 mb-4">
                    ${element.accounts} accounts
                </div>
                <div class="col-2 mb-4">
                    $${element.cost}
                </div>
                <div class="col-3 mb-4">
                    
                    ${
                        status === "coming soon"
                            ? "soon"
                            : '<button class="border-0 bg-white text-primary"> detail </button>'
                    }
                    
                </div>
                <div class="col-1 mb-4"></div>
            `;
    });
    return table.join("");
}
