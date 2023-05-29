enum ErrorMessage {
	ID_CANNOT_BE_NULL = 'ID_CANNOT_BE_NULL',
	NAME_CANNOT_BE_NULL_OR_EMPTLY = 'NAME_CANNOT_BE_NULL_OR_EMPTLY',
	NAME_MUST_HAVE_BETWEEN_1_AND_255_CHARACTERS = 'NAME_MUST_HAVE_BETWEEN_1_AND_255_CHARACTERS',
	UNIT_ID_CANNOT_BE_NULL = 'UNIT_ID_CANNOT_BE_NULL',
	ALREADY_EXISTS_AN_CAR_WITH_THE_SAME_NAME = 'ALREADY_EXISTS_AN_CAR_WITH_THE_SAME_NAME',
	CAR_NOT_FOUND = 'CAR_NOT_FOUND',
	START_DATE_CANNOT_BE_NULL = 'START_DATE_CANNOT_BE_NULL',
	START_TIME_CANNOT_BE_NULL = 'START_TIME_CANNOT_BE_NULL',
	END_DATE_CANNOT_BE_NULL = 'END_DATE_CANNOT_BE_NULL',
	END_TIME_CANNOT_BE_NULL = 'END_TIME_CANNOT_BE_NULL',
	PART_NUMBER_CANNOT_BE_NULL_OR_EMPTY = 'PART_NUMBER_CANNOT_BE_NULL_OR_EMPTY',
	SAMPLE_ID_CANNOT_BE_NULL_OR_EMPTY = 'SAMPLE_ID_CANNOT_BE_NULL_OR_EMPTY',
	INSPECTOR_CANNOT_BE_NULL_OR_EMPTY = 'INSPECTOR_CANNOT_BE_NULL_OR_EMPTY',
	AXIS_COORDINATE_NAME_CANNOT_BE_NULL_OR_EMPTY = 'AXIS_COORDINATE_NAME_CANNOT_BE_NULL_OR_EMPTY',
	AXIS_COORDINATE_LOWER_TOLERANCE_CANNOT_BE_NULL = 'AXIS_COORDINATE_LOWER_TOLERANCE_CANNOT_BE_NULL',
	AXIS_COORDINATE_SUPERIOR_TOLERANCE_CANNOT_BE_NULL = 'AXIS_COORDINATE_SUPERIOR_TOLERANCE_CANNOT_BE_NULL',
	AXIS_COORDINATE_AXIS_CANNOT_BE_NULL = 'AXIS_COORDINATE_AXIS_CANNOT_BE_NULL',
	PMP_NAME_CANNOT_BE_NULL_OR_EMPTY = 'PMP_NAME_CANNOT_BE_NULL_OR_EMPTY',
	ALREADY_EXISTS_AN_UNIT_WITH_THE_SAME_NAME = 'ALREADY_EXISTS_AN_UNIT_WITH_THE_SAME_NAME',
	EQUIPMENT_NOT_FOUND = 'EQUIPMENT_NOT_FOUND',
	FORM_PART_NUMBER = 'PART_NUMBER_CANNOT_BE_NULL_OR_EMPTLY',
	FORM_PART_NUMBER_SIZE = 'PART_NUMBER_MUST_HAVE_BETWEEN_1_AND_255_CHARACTERS',
	FORM_STEP_DESCRIPTION = 'STEP_DESCRIPTION_CANNOT_BE_NULL_OR_EMPTLY',
	FORM_STEP_DESCRIPTION_SIZE = 'STEP_DESCRIPTION_MUST_HAVE_BETWEEN_1_AND_255_CHARACTERS',
	FORM_CAR = 'CAR_CANNOT_BE_NULL',
	NOT_FOUND = 'MODEL_NOT_FOUND',
	DUPLICATE = 'DUPLICATE_MODEL',
	DUPLICATE_PMP = 'DUPLICATE_PMP',
	DUPLICATE_FM = 'DUPLICATE_FM',
	DUPLICATE_AXIS_COORDINATE = 'DUPLICATE_AXIS_COORDINATE',
	DUPLICATE_PMP_FM = 'DUPLICATE_PMP_IN_FM_LIST',
	NOMINAL_PMP_NAME = 'NOMINAL_PMP_NAME_CANNOT_BE_NULL_OR_EMPTLY',
	NOMINAL_PMP_AXIS = 'NOMINAL_PMP_AXIS_CANNOT_BE_NULL',
	NOMINAL_PMP_X = 'NOMINAL_PMP_AXIS_X_CANNOT_BE_NULL',
	NOMINAL_PMP_Y = 'NOMINAL_PMP_AXIS_Y_CANNOT_BE_NULL',
	NOMINAL_PMP_Z = 'NOMINAL_PMP_AXIS_Z_CANNOT_BE_NULL',
	NOMINAL_PMP_AXIS_COORDINATE_LIST = 'NOMINAL_PMP_AXIS_COORDINATE_LIST_CANNOT_BE_NULL_OR_EMPTLY',
	NOMINAL_AXIS_COORDINATE_NAME = 'NOMINAL_AXIS_COORDINATE_NAME_CANNOT_BE_NULL_OR_EMPTLY',
	NOMINAL_AXIS_COORDINATE_LOWER_TOLERANCE = 'NOMINAL_AXIS_COORDINATE_LOWER_TOLERANCE_CANNOT_BE_NULL',
	NOMINAL_AXIS_COORDINATE_HIGHER_TOLERANCE = 'NOMINAL_AXIS_COORDINATE_HIGHER_TOLERANCE_CANNOT_BE_NULL',
	NOMINAL_AXIS_COORDINATE_AXIS = 'NOMINAL_AXIS_COORDINATE_AXIS_CANNOT_BE_NULL',
	NOMINAL_AXIS_COORDINATE_NOT_FIND_BY_NAME_IN_UPDATE = 'NOMINAL_AXIS_COORDINATE_NOT_FIND_BY_NAME_IN_UPDATE',
	THIS_NOMINAL_AXIS_COORDINATE_CANNOT_HAS_ID_NULL = 'THIS_NOMINAL_AXIS_COORDINATE_CANNOT_HAS_ID_NULL',
	NOMINAL_FM_NAME = 'NOMINAL_FM_NAME_CANNOT_BE_NULL_OR_EMPTLY',
	NOMINAL_FM_AXIS = 'NOMINAL_FM_AXIS_CANNOT_BE_NULL',
	NOMINAL_FM_HIGHER_VALUE_TOLERANCE = 'NOMINAL_FM_HIGHER_TOLERANCE_CANNOT_BE_NULL',
	NOMINAL_FM_LOWER_VALUE_TOLERANCE = 'NOMINAL_FM_LOWER_TOLERANCE_CANNOT_BE_NULL',
	NOMINAL_FM_DEFAULT_VALUE = 'NOMINAL_FM_DEFAULT_VALUE_CANNOT_BE_NULL',
	NOMINAL_FM_CATALOG = 'NOMINAL_FM_CATALOG_CANNOT_BE_NULL',
	NOMINAL_FM_LEVEL = 'NOMINAL_FM_LEVEL_CANNOT_BE_NULL',
	NOMINAL_FM_NOMINAL_POINTS = 'NOMINAL_FM_POINTS_TO_MAP_CANNOT_BE_NULL_OR_EMPTLY',
	UPLOAD_DATE = 'UPLOAD_DATE_CANNOT_BE_NULL',
	UPLOAD_USER = 'UPLOAD_USER_CANNOT_BE_NULL_OR_EMPTLY',
	UPLOAD_USER_SIZE = 'UPLOAD_USER_MUST_HAVE_BETWEEN_1_AND_45_CHARACTERS',
	MODEL = 'MODEL_CANNOT_BE_NULL',
	EQUIPMENT = 'EQUIPMENT_CANNOT_BE_NULL',
	PIN = 'PIN_CANNOT_BE_NULL_OR_EMPTLY',
	PIN_SIZE = 'PIN_MUST_HAVE_BETWEEN_1_AND_10_CHARACTERS',
	SCAN_INIT_DATE = 'SCAN_INIT_DATE_CANNOT_BE_NULL',
	SCAN_END_DATE = 'SCAN_END_DATE_CANNOT_BE_NULL',
	STATUS = 'STATUS_CANNOT_BE_NULL',
	NOT_RECOGNIZED = 'DMO_FILE_NOT_RECOGNIZED',
	SAMPLE_NOT_FOUND = 'SAMPLE_NOT_FOUND',
	DUPLICATE_SAMPLE_FOR_THIS_MODEL = 'DUPLICATE_SAMPLE_FOR_THIS_MODEL',
	PMP_NOT_FOUND = 'PMP_NOT_FOUND',
	FM_NOT_FOUND = 'FM_NOT_FOUND',
	AXIS_COORDINATE_NOT_FOUND = 'AXIS_COORDINATE_NOT_FOUND',
	MEASUREMENT_PMP_X = 'MEASUREMENT_PMP_AXIS_X_CANNOT_BE_NULL',
	MEASUREMENT_PMP_Y = 'MEASUREMENT_PMP_AXIS_Y_CANNOT_BE_NULL',
	MEASUREMENT_PMP_Z = 'MEASUREMENT_PMP_AXIS_Z_CANNOT_BE_NULL',
	MEASUREMENT_PMP_ASSOCIATION = 'MEASUREMENT_PMP_ASSOCIATION_CANNOT_BE_NULL',
	MEASUREMENT_PMP_AXIS_COORDINATE_LIST = 'MEASUREMENT_PMP_AXIS_COORDINATE_LIST_CANNOT_BE_NULL_OR_EMPTLY',
	MEASUREMENT_AXIS_COORDINATE_ASSOCIATION = 'MEASUREMENT_AXIS_COORDINATE_ASSOCIATION_CANNOT_BE_NULL',
	MEASUREMENT_AXIS_COORDINATE_VALUE = 'MEASUREMENT_AXIS_COORDINATE_VALUE_CANNOT_BE_NULL',
	MEASUREMENT_AXIS_COORDINATE_TOLARANCE = 'MEASUREMENT_AXIS_COORDINATE_TOLERANCE_CANNOT_BE_NULL',
	MEASUREMENT_FM_VALUE = 'MEASUREMENT_FM_VALUE_CANNOT_BE_NULL',
	MEASUREMENT_FM_TOLERANCE = 'MEASUREMENT_FM_TOLERANCE_CANNOT_BE_NULL',
	MEASUREMENT_FM_ASSOCIATION = 'MEASUREMENTL_FM_ASSOCIATION_CANNOT_BE_NULL',
	ERROR_NOT_FOUND = 'UNIT_NOT_FOUND',
	AUTHENTICATION_FORM_VW_ID_ERROR = 'VW_ID_CANNOT_BE_NULL_OR_EMPTY',
	AUTHENTICATION_FORM_PASSWORD_ERROR = 'PASSWORD_CANNOT_BE_NULL_OR_EMPTY',
	USER_NOT_FOUND_ON_SYSTEM = 'USER_NOT_FOUND_ON_SYSTEM',
	USER_INACTIVE = 'USER_INACTIVE',
	USER_WRONG_PASSWORD = 'USER_WRONG_PASSWORD',
	ROLE_NOT_FOUND = 'ROLE_NOT_FOUND',
	NOT_POSSIBLE_GENERATE_TOKEN_TO_USER_NULL = 'NOT_POSSIBLE_GENERATE_TOKEN_TO_USER_NULL',
	NOT_POSSIBLE_GENERATE_TOKEN_TO_INACTIVE_USER = 'NOT_POSSIBLE_GENERATE_TOKEN_TO_INACTIVE_USER',
	VW_ID_FORM = 'VW_ID_IS_MANDATORY',
	PASSWORD_FORM = 'PASSWORD_IS_MANDATORY',
	PASSWORD_CONFIRMATION_FORM = 'PASSWORD_CONFIRMATION_IS_MANDATORY',
	ROLES_FORM = 'AT_LEAST_ONE_ROLE_IS_MANDATORY',
	VW_ID_FORM_SIZE = 'VW_ID_MUST_HAVE_A_MINIMUM_OF_7_AND_MAXIMUM_OF_10_CHARACTERS',
	ERROR_DUPLICATE = 'DUPLICATE_USER',
	ERROR_PASSWORD_CONFIRMATION = 'WRONG_PASSWORD_CONFIRMATION',
	ERROR_INVALID_GROUPED_ROLES = 'CONSULTANT_CANNOT_BE_ADMIN_IN_THE_SAME_TIME',
	FILE_HAS_NO_DATA = 'FILE_HAS_NO_DATA',
	FILE_IS_NOT_A_DMO = 'FILE_IS_NOT_A_DMO',
	EQUIPMENT_INACTIVE = 'EQUIPMENT_INACTIVE',
	CAR_INACTIVE = 'CAR_INACTIVE',
	NOMINAL_PMP_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_PMP_ASSOCIATION = 'NOMINAL_PMP_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_PMP_ASSOCIATION',
	NOMINAL_FM_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_FM_ASSOCIATION = 'NOMINAL_FM_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_FM_ASSOCIATION',
	NOMINAL_AXIS_COORDINATE_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_AXIS_COORDINATE_ASSOCIATION = 'NOMINAL_AXIS_COORDINATE_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_AXIS_COORDINATE_ASSOCIATION'
}

export function getErrorMessage(error: ErrorMessage | string) {
	switch (error) {
		case ErrorMessage.ID_CANNOT_BE_NULL: {
			return 'O ID não pode ser nulo.'
		}
		case ErrorMessage.NAME_CANNOT_BE_NULL_OR_EMPTLY: {
			return 'O nome não pode ser nulo ou vazio.'
		}
		case ErrorMessage.NAME_MUST_HAVE_BETWEEN_1_AND_255_CHARACTERS: {
			return 'O nome deve ter entre 1 e 255 caracteres.'
		}
		case ErrorMessage.UNIT_ID_CANNOT_BE_NULL: {
			return 'O ID da unidade não pode ser nulo.'
		}
		case ErrorMessage.ALREADY_EXISTS_AN_CAR_WITH_THE_SAME_NAME: {
			return 'Já existe um carro com o mesmo nome.'
		}
		case ErrorMessage.CAR_NOT_FOUND: {
			return 'O carro não foi encontrado.'
		}
		case ErrorMessage.START_DATE_CANNOT_BE_NULL: {
			return 'A data de início não pode ser nula.'
		}
		case ErrorMessage.START_TIME_CANNOT_BE_NULL: {
			return 'A hora de início não pode ser nula.'
		}
		case ErrorMessage.END_DATE_CANNOT_BE_NULL: {
			return 'A data de término não pode ser nula.'
		}
		case ErrorMessage.END_TIME_CANNOT_BE_NULL: {
			return 'A hora de término não pode ser nula.'
		}
		case ErrorMessage.PART_NUMBER_CANNOT_BE_NULL_OR_EMPTY: {
			return 'O número da peça não pode ser nulo ou vazio.'
		}
		case ErrorMessage.SAMPLE_ID_CANNOT_BE_NULL_OR_EMPTY: {
			return 'O ID da amostra não pode ser nulo ou vazio.'
		}
		case ErrorMessage.INSPECTOR_CANNOT_BE_NULL_OR_EMPTY: {
			return 'O inspetor não pode ser nulo ou vazio.'
		}
		case ErrorMessage.AXIS_COORDINATE_NAME_CANNOT_BE_NULL_OR_EMPTY: {
			return 'O nome das coordenadas do eixo não pode ser nulo ou vazio.'
		}
		case ErrorMessage.AXIS_COORDINATE_LOWER_TOLERANCE_CANNOT_BE_NULL: {
			return 'A tolerância inferior das coordenadas do eixo não pode ser nula.'
		}
		case ErrorMessage.AXIS_COORDINATE_SUPERIOR_TOLERANCE_CANNOT_BE_NULL: {
			return 'A tolerância superior das coordenadas do eixo não pode ser nula.'
		}
		case ErrorMessage.AXIS_COORDINATE_AXIS_CANNOT_BE_NULL: {
			return 'O eixo das coordenadas não pode ser nulo.'
		}
		case ErrorMessage.PMP_NAME_CANNOT_BE_NULL_OR_EMPTY: {
			return 'O nome do PMP não pode ser nulo ou vazio.'
		}
		case ErrorMessage.ALREADY_EXISTS_AN_UNIT_WITH_THE_SAME_NAME: {
			return 'Já existe uma unidade com o mesmo nome.'
		}
		case ErrorMessage.EQUIPMENT_NOT_FOUND: {
			return 'O equipamento não foi encontrado.'
		}
		case ErrorMessage.FORM_PART_NUMBER: {
			return 'O número da peça não pode ser nulo ou vazio.'
		}
		case ErrorMessage.FORM_PART_NUMBER_SIZE: {
			return 'O número da peça deve ter entre 1 e 255 caracteres.'
		}
		case ErrorMessage.FORM_STEP_DESCRIPTION: {
			return 'A descrição do passo não pode ser nula ou vazia.'
		}
		case ErrorMessage.FORM_STEP_DESCRIPTION_SIZE: {
			return 'A descrição do passo deve ter entre 1 e 255 caracteres.'
		}
		case ErrorMessage.FORM_CAR: {
			return 'O carro não pode ser nulo.'
		}
		case ErrorMessage.NOT_FOUND: {
			return 'O modelo não foi encontrado.'
		}
		case ErrorMessage.DUPLICATE: {
			return 'Modelo duplicado.'
		}
		case ErrorMessage.DUPLICATE_PMP: {
			return 'PMP duplicado.'
		}
		case ErrorMessage.DUPLICATE_FM: {
			return 'FM duplicado.'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_AXIS: {
			return 'Coordenada do eixo nominal não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_HIGHER_TOLERANCE: {
			return 'Tolerância superior do eixo nominal não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_LOWER_TOLERANCE: {
			return 'Tolerância inferior do eixo nominal não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_NAME: {
			return 'Nome do eixo nominal não pode ser nulo'
		}
		case 'DUPLICATE_AXIS_COORDINATE': {
			return 'Coordenada do eixo duplicada'
		}
		case ErrorMessage.DUPLICATE_PMP_FM: {
			return 'PMP duplicado na lista FM'
		}
		case ErrorMessage.NOMINAL_PMP_NAME: {
			return 'Nome nominal PMP não pode ser nulo ou vazio'
		}
		case ErrorMessage.NOMINAL_PMP_AXIS: {
			return 'Eixo nominal PMP não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_PMP_X: {
			return 'Eixo X nominal PMP não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_PMP_Y: {
			return 'Eixo Y nominal PMP não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_PMP_Z: {
			return 'Eixo Z nominal PMP não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_PMP_AXIS_COORDINATE_LIST: {
			return 'Lista de coordenadas do eixo nominal PMP não pode ser nula ou vazia'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_NOT_FIND_BY_NAME_IN_UPDATE: {
			return 'Não foi possível encontrar a coordenada do eixo nominal pelo nome na atualização'
		}
		case ErrorMessage.THIS_NOMINAL_AXIS_COORDINATE_CANNOT_HAS_ID_NULL: {
			return 'Esta coordenada do eixo nominal não pode ter ID nulo'
		}
		case ErrorMessage.NOMINAL_FM_NAME: {
			return 'Nome nominal FM não pode ser nulo ou vazio'
		}
		case ErrorMessage.NOMINAL_FM_AXIS: {
			return 'Eixo nominal FM não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_FM_HIGHER_VALUE_TOLERANCE: {
			return 'Tolerância superior nominal FM não pode ser nula'
		}
		case ErrorMessage.NOMINAL_FM_LOWER_VALUE_TOLERANCE: {
			return 'Tolerância inferior nominal FM não pode ser nula'
		}
		case ErrorMessage.NOMINAL_FM_DEFAULT_VALUE: {
			return 'Valor padrão nominal FM não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_FM_CATALOG: {
			return 'Catálogo nominal FM não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_FM_LEVEL: {
			return 'Nível nominal FM não pode ser nulo'
		}
		case ErrorMessage.NOMINAL_FM_NOMINAL_POINTS: {
			return 'Pontos nominais FM para mapeamento não podem ser nulos ou vazios'
		}
		case ErrorMessage.UPLOAD_DATE: {
			return 'Data de upload não pode ser nula'
		}
		case ErrorMessage.UPLOAD_USER: {
			return 'Usuário de upload não pode ser nulo ou vazio'
		}
		case ErrorMessage.UPLOAD_USER_SIZE: {
			return 'Usuário de upload deve ter entre 1 e 45 caracteres'
		}
		case ErrorMessage.MODEL: {
			return 'Modelo não pode ser nulo'
		}
		case ErrorMessage.EQUIPMENT: {
			return 'Equipamento não pode ser nulo'
		}
		case ErrorMessage.PIN: {
			return 'O PIN não pode ser nulo ou vazio'
		}
		case ErrorMessage.PIN_SIZE: {
			return 'O PIN deve ter entre 1 e 10 caracteres'
		}
		case ErrorMessage.SCAN_INIT_DATE: {
			return 'A data de início da digitalização não pode ser nula'
		}
		case ErrorMessage.SCAN_END_DATE: {
			return 'A data de término da digitalização não pode ser nula'
		}
		case ErrorMessage.STATUS: {
			return 'O status não pode ser nulo'
		}
		case ErrorMessage.NOT_RECOGNIZED: {
			return 'Arquivo DMO não reconhecido'
		}
		case ErrorMessage.SAMPLE_NOT_FOUND: {
			return 'Amostra não encontrada'
		}
		case ErrorMessage.DUPLICATE_SAMPLE_FOR_THIS_MODEL: {
			return 'Duplicata de amostra para este modelo'
		}
		case ErrorMessage.PMP_NOT_FOUND: {
			return 'PMP não encontrado'
		}
		case ErrorMessage.FM_NOT_FOUND: {
			return 'FM não encontrado'
		}
		case ErrorMessage.AXIS_COORDINATE_NOT_FOUND: {
			return 'Coordenada do eixo não encontrada'
		}
		case ErrorMessage.MEASUREMENT_PMP_X: {
			return 'A medição do eixo X do PMP não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_PMP_Y: {
			return 'A medição do eixo Y do PMP não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_PMP_Z: {
			return 'A medição do eixo Z do PMP não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_PMP_ASSOCIATION: {
			return 'A associação de medição do PMP não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_PMP_AXIS_COORDINATE_LIST: {
			return 'A lista de coordenadas do eixo do PMP não pode ser nula ou vazia'
		}
		case ErrorMessage.MEASUREMENT_AXIS_COORDINATE_ASSOCIATION: {
			return 'A associação da coordenada do eixo da medição não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_AXIS_COORDINATE_VALUE: {
			return 'O valor da coordenada do eixo da medição não pode ser nulo'
		}
		case ErrorMessage.MEASUREMENT_AXIS_COORDINATE_TOLARANCE: {
			return 'A tolerância da coordenada do eixo da medição não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_FM_VALUE: {
			return 'O valor do FM da medição não pode ser nulo'
		}
		case ErrorMessage.MEASUREMENT_FM_TOLERANCE: {
			return 'A tolerância do FM da medição não pode ser nula'
		}
		case ErrorMessage.MEASUREMENT_FM_ASSOCIATION: {
			return 'A associação da medição do FM não pode ser nula'
		}
		case ErrorMessage.ERROR_NOT_FOUND: {
			return 'Unidade não encontrada'
		}
		case ErrorMessage.AUTHENTICATION_FORM_VW_ID_ERROR: {
			return 'O VW ID não pode ser nulo ou vazio'
		}
		case ErrorMessage.AUTHENTICATION_FORM_PASSWORD_ERROR: {
			return 'A senha não pode ser nula ou vazia'
		}
		case ErrorMessage.USER_NOT_FOUND_ON_SYSTEM: {
			return 'Usuário não encontrado no sistema'
		}
		case ErrorMessage.USER_INACTIVE: {
			return 'Usuário inativo'
		}
		case ErrorMessage.USER_WRONG_PASSWORD: {
			return 'Senha de usuário incorreta'
		}
		case ErrorMessage.ROLE_NOT_FOUND: {
			return 'Papel não encontrado'
		}
		case ErrorMessage.NOT_POSSIBLE_GENERATE_TOKEN_TO_USER_NULL: {
			return 'Não é possível gerar um token para um usuário nulo'
		}
		case ErrorMessage.NOT_POSSIBLE_GENERATE_TOKEN_TO_INACTIVE_USER: {
			return 'Não é possível gerar um token para um usuário inativo'
		}
		case ErrorMessage.VW_ID_FORM: {
			return 'O campo "VW ID" é obrigatório'
		}
		case ErrorMessage.PASSWORD_FORM: {
			return 'O campo "Senha" é obrigatório'
		}
		case ErrorMessage.PASSWORD_CONFIRMATION_FORM: {
			return 'O campo "Confirmação de senha" é obrigatório'
		}
		case ErrorMessage.ROLES_FORM: {
			return 'Pelo menos uma função deve ser selecionada'
		}
		case ErrorMessage.VW_ID_FORM_SIZE: {
			return 'O "VW ID" deve ter entre 7 e 10 caracteres'
		}
		case ErrorMessage.ERROR_DUPLICATE: {
			return 'Usuário duplicado'
		}
		case ErrorMessage.ERROR_PASSWORD_CONFIRMATION: {
			return 'Confirmação de senha incorreta'
		}
		case ErrorMessage.ERROR_INVALID_GROUPED_ROLES: {
			return 'Um consultor não pode ser administrador ao mesmo tempo'
		}
		case ErrorMessage.FILE_HAS_NO_DATA: {
			return 'O arquivo não possui dados'
		}
		case ErrorMessage.FILE_IS_NOT_A_DMO: {
			return 'O arquivo não é um DMO'
		}
		case ErrorMessage.EQUIPMENT_INACTIVE: {
			return 'O equipamento está inativo'
		}
		case ErrorMessage.CAR_INACTIVE: {
			return 'O carro está inativo'
		}
		case ErrorMessage.NOMINAL_PMP_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_PMP_ASSOCIATION: {
			return 'O PMP nominal não pode ser excluído porque possui associação com medição PMP'
		}
		case ErrorMessage.NOMINAL_FM_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_FM_ASSOCIATION: {
			return 'O FM nominal não pode ser excluído porque possui associação com medição FM'
		}
		case ErrorMessage.NOMINAL_AXIS_COORDINATE_CANNOT_BE_DELETED_BECAUSE_HAS_MESUAREMENT_AXIS_COORDINATE_ASSOCIATION: {
			return 'A coordenada do eixo nominal não pode ser excluída porque possui associação com medição da coordenada do eixo'
		}
		default: {
			return null
		}
	}
}
