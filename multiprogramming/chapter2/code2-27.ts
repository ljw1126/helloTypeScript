// 접근 제어자와 함께 생성자 매개변수에 직접 명시하면 할당 코드를 생략 가능
// iterable 필드가 클래스 내부에 자동으로 생성됨
class FxIterable<A> {
    constructor(private iterable: Iterable<A>) {}
}