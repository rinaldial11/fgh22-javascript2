const names = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope', 'Azana', 'Alan']

function searchName (stringAn, limitCount, callback) {
    let hasil = []

    for (let i=0; i<names.length; i++) {
        if (names[i].toLocaleLowerCase().includes(stringAn.toLowerCase())) {
            hasil.push(names[i])

            if (hasil.length === limitCount) {
                break
            }
        }
    }
callback(hasil)
}

function lihatHasil (hasil) {
    console.log (hasil)
}
searchName ('an', 3, lihatHasil)