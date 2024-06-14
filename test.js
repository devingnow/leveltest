// 1. DOM 메모리 누수

// 현상이 발생되는 이유
// const two가 전역에 선언되어있어 함수내에서 삭제해도 전역에는 남아있기때문에 계속 참조를 하려고 한다.

// 해결코드
`
<body>
    <div id="one">One</div>
    <div id="two">Two</div>
</body>
<script>
    const one = document.getElementById('one');
    
    one.addEventListener('click',function(){
        const two = document.getElementById('two');
        two.remove();
        console.log(two);
    })
</script>
`


// 2. 소수 구하기

function isPrime(n){

}

// console.log(isPrime(31)); // true가 나와야하고
// console.log(isPrime(10)); // false가 나와야함.