export type WithMockedUUID<T> = {
    _mockedUuid: string;
} & T;

export type ClassConstructor<T, ARGS = any> = new (...constructorArguments: ARGS[]) => T;
