import React, { useCallback, useState, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
/**/
import * as S from './styles';

/*
1-To extend all properties of the input 
2-If you nedd to  overwrite the property <name> of an input, just declare it
it as required
*/
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	inputRef: any;
	error: string | undefined;
	icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
	//and to add the properties from react-icons, must pass type as IconBaseProps
}
const Input = ({ name, inputRef, error, icon: Icon, ...rest }: Props) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleOnFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	console.log('err ', error);
	return (
		<S.Container isErrored={!!error} isFocused={isFocused}>
			{Icon && <Icon size={24} />}
			<input
				name={name}
				onFocus={handleOnFocus}
				onBlur={handleInputBlur}
				ref={inputRef}
				{...rest}
			/>
		</S.Container>
	);
};

export default Input;
