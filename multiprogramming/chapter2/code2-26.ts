// 2.3.2 클래스와 고차 함수, 반복자, 타입 시스템을 조합하기
class FxIterable<A> {
    private iterable: Iterable<A>;

    constructor(iterable: Iterable<A>) {
        this.iterable = iterable;   
    }
}